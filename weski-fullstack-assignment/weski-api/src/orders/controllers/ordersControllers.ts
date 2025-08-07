import { Request, Response } from "express";
import { streamResults } from "../services/hotelSearchService";

export const searchHotels = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const { ski_site, from_date, to_date, group_size } = req.query;

  try {
    await streamResults(
      {
        ski_site: Number(ski_site),
        from_date: String(from_date),
        to_date: String(to_date),
        group_size: Number(group_size),
      },
      (hotel) => {
        res.write(`data: ${JSON.stringify(hotel)}\n\n`);
      }
    );

    res.write("event: done\ndata: end\n\n");
    res.end();
  } catch (error) {
    res.write(`event: error\ndata: ${JSON.stringify(error)}\n\n`);
    res.end();
  }
};
