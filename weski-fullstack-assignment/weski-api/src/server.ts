import "dotenv/config";
import express from "express";
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "cors";
import hotelRoutes from "./orders/routes/hotelRoutes";

const app = express();

app.use(morgan);
app.use(cors());
app.use(express.json());
app.use("/api", hotelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));
});
