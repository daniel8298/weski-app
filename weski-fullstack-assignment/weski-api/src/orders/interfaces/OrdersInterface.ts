export interface HotelSearchParams {
  ski_site: number;
  from_date: string;
  to_date: string;
  group_size: number;
}

export interface AccommodationResponse {
  statusCode: number;
  body: {
    success: string;
    accommodations: Accommodation[];
  };
}

interface Accommodation {
  HotelCode: string;
  HotelName: string;
  HotelDescriptiveContent: {
    Images: Image[];
  };
  HotelInfo: {
    Position: {
      Latitude: string;
      Longitude: string;
      Distances: Distance[];
    };
    Rating: string;
    Beds: string;
  };
  PricesInfo: {
    AmountAfterTax: string;
    AmountBeforeTax: string;
  };
}

interface Image {
  URL: string;
  MainImage?: string; // Optional, only present on the main image
}

interface Distance {
  type: string;
  distance: string;
}
