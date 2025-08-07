import { Hotel } from "../../interfaces/hotel";

export const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden mb-4">
      <img
        src={hotel.HotelDescriptiveContent.Images[0].URL}
        alt={hotel.HotelName}
        className="w-1/3 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{hotel.HotelName}</h2>
          <div className="flex items-center text-yellow-500 mb-1">
            {"★".repeat(hotel.HotelInfo.Rating)}
          </div>
          {/* <div className="flex items-center text-gray-500 text-sm">
            📍 {hotel.}
          </div> */}
        </div>
        <div className="mt-4 border-t pt-2 flex justify-end items-baseline">
          <span className="text-lg font-semibold text-gray-800">
            £{hotel.PricesInfo.AmountAfterTax.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500 ml-1">/per person</span>
        </div>
      </div>
    </div>
  );
};
