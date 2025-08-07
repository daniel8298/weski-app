import { HotelSearchParams } from "./OrdersInterface";

export interface HotelProvider {
  search(params: HotelSearchParams): Promise<any[]>;
}
