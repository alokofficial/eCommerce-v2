import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT
const app = express();
import connectDB from "./config/db.js";
connectDB()
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
})

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
