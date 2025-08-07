import axios from "axios";
import { HotelSearchParams } from "../interfaces/OrdersInterface";
import { HotelProvider } from "../interfaces/HotelProviderInterface";

export class HotelSimulatorProvider implements HotelProvider {
  search = async ({
    ski_site,
    from_date,
    to_date,
    group_size,
  }: HotelSearchParams) => {
    const response = await axios.post(
      "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator",
      {
        query: { ski_site, from_date, to_date, group_size },
      }
    );
    return response.data.body.accommodations;
  };
}
