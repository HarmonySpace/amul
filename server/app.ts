import express from "express";
import morgan from "morgan";
import cors from "cors";
import allRoutes from "./routes/index";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(allRoutes);

export default app;
