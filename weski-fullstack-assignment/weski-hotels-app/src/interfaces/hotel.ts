export interface Hotel {
  HotelCode: string;
  HotelName: string;
  HotelDescriptiveContent: {
    Images: Image[];
  };
  HotelInfo: {
    Position: {
      Latitude: number;
      Longitude: number;
      Distances: Distance[];
    };
    Rating: number;
    Beds: number;
  };
  PricesInfo: {
    AmountAfterTax: number;
    AmountBeforeTax: number;
  };
}

interface Image {
  URL: string;
  MainImage: string;
}

interface Distance {
  type: string;
  distance: number;
}
