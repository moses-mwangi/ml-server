import express from "express";
import cors from "cors";
import TesRouter from "./routes/TestRoutes";

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (allowedOrigins.includes(origin!) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log("Testing middleware");
  next();
});

app.use("/", TesRouter);

export default app;
