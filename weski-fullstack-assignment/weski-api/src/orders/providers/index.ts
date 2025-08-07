import { HotelProvider } from "../interfaces/HotelProviderInterface";
import { HotelSimulatorProvider } from "./hotelSimulatorProvider";

export const hotelProviders: HotelProvider[] = [new HotelSimulatorProvider()];
