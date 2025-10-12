import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./authRoutes.js";
import habitsRoutes from "./habitRoutes.js"; // 👈 new route file

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/auth", authRoutes);
app.use("/habits", habitsRoutes); // 👈 mount the new habits routes

// ✅ MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/habitApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
