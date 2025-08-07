import { Hotel } from "../../interfaces/hotel";
import { HotelCard } from "./HotelCard";

interface Props {
  hotels: Hotel[];
}

const Main: React.FC<Props> = ({ hotels }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-2">Select your ski trip</h1>
      <p className="text-sm text-gray-600 mb-4">
        {`${hotels.length} ski trips options • La Plagne • Dec 1 - Dec 12 • 4 people`}
      </p>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.HotelCode} hotel={hotel} />
      ))}
    </div>
  );
};

export default Main;
