import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import "./config/passport.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

connectDB();

app.use("/api/sessions", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
