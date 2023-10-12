import express from "express";
import cors from "cors";
import { routes } from "./routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT ${port}`);
});