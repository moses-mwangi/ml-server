import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: ".env" });

process.on("uncaughtException", (err) => {
  console.error("UNHANDLED EXCEPTION ---- Shutting down 💥");
  console.error(err.name, err.stack, err.message);
  process.exit(1);
});

// const db =
//   "mongodb+srv://mosesmwangime:9SPqAj4JOaXBxDrI@cluster0.sqjq7km.mongodb.net/delivery?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(db)
//   .then(() => {
//     console.log("Database has succefully connneccted");
//   })
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => console.error("Database connection error:", err));

const port: number = 3007;
const server = app.listen(3005, "127.0.0.1", () => {
  console.log(`listening to port 3005`);
});
