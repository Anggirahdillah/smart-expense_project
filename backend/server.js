const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/database");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/allocation", require("./src/routes/allocationRoutes"));
app.use("/api/dashboard", require("./src/routes/dashboardRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);