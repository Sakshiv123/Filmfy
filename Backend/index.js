// Packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
// Required for ES module compatibility

import userRoutes from "./routes/userRoutes.js";
import movieroute from "./routes/movierouter.js"
import genreroute from "./routes/GenreRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js";

// Files
import connectDB from "./config/db.js";

// Configuration
dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/movies", movieroute);
app.use("/api/v1/genre", genreroute);
app.use("/api/v1/upload", uploadRoutes);

// Setting the PORT
const PORT = process.env.PORT || 10000;

// Handle __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Serve static files
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//app.use('/uploads', express.static('uploads'));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
