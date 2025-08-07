import { HotelSimulatorProvider } from "../providers/hotelSimulatorProvider";
import { HotelSearchParams } from "../interfaces/OrdersInterface";

export const streamResults = async (
  { ski_site, from_date, to_date, group_size }: HotelSearchParams,
  onResult: (hotel: any) => void
) => {
  const provider = new HotelSimulatorProvider();

  for (let size = group_size; size <= 10; size++) {
    try {
      const results = await provider.search({
        ski_site,
        from_date,
        to_date,
        group_size: size,
      });

      for (const room of results) {
        onResult(room);
      }
    } catch (error) {
      console.error(`Error fetching group size ${size}:`, error);
    }
  }
};
