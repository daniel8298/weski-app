import express from "express";
import { searchHotels } from "../controllers/ordersControllers";
const router = express.Router();

router.get("/search", searchHotels);

export default router;
