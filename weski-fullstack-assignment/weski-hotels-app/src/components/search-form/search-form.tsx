import React, { useState } from "react";
import "./search-form.scss";
import ResortsSelect from "./resorts-select/resorts-select";
import GuestsSelect from "./guests-select/guests-select";
import SearchButton from "./search-button/search-button";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { Hotel } from "../../interfaces/hotel";

interface Props {
  setHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
}

const SearchForm: React.FC<Props> = ({ setHotels }) => {
  const [skiSiteId, setSkiSiteId] = useState<number>(1);
  const [groupSize, setGroupSize] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date | null>(dayjs().toDate());
  const [endDate, setEndDate] = useState<Date | null>(
    dayjs().add(7, "days").toDate()
  );

  const handleSearch = async () => {
    setHotels([]);

    const params = new URLSearchParams({
      ski_site: skiSiteId.toString(),
      from_date: dayjs(startDate).format("YYYY-MM-DD"),
      to_date: dayjs(endDate).format("YYYY-MM-DD"),
      group_size: groupSize.toString(),
    });

    const source = new EventSource(
      `http://localhost:8080/api/search?${params.toString()}`
    );
    source.onmessage = (event) => {
      const hotel = JSON.parse(event.data);

      setHotels((prev) =>
        [...prev, hotel].sort(
          (a, b) => a.PricesInfo.AmountAfterTax - b.PricesInfo.AmountAfterTax
        )
      );
    };

    source.addEventListener("done", () => {
      source.close();
    });

    source.onerror = (err) => {
      console.error("SSE Error:", err);
      source.close();
    };
  };

  return (
    <div className="search-form">
      <ResortsSelect
        value={skiSiteId}
        onChange={(skiSiteId) => setSkiSiteId(skiSiteId)}
      />
      <GuestsSelect
        value={groupSize}
        onChange={(groupSize) => setGroupSize(groupSize)}
      />

      <DatePicker
        className="search-form-date-picker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        enableTabLoop={false}
      />
      <DatePicker
        className="search-form-date-picker"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        enableTabLoop={false}
      />

      <SearchButton onClick={handleSearch} />
    </div>
  );
};

export default SearchForm;
