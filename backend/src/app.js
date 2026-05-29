import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import allocationRoutes from "./routes/allocationRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";


dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: "https://incomparable-hamster-4b28eb.netlify.app",
  credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/allocation", allocationRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/ai", aiRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
