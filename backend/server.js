import express from "express";
import dotenv from "dotenv";
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT
const app = express();
import connectDB from "./config/db.js";
connectDB()

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get('/api/products/:id',(req,res)=>{
    const product = products.find(item=>item._id===req.params.id)
    res.json(product)
})
app.get('/',(req,res)=>{
    res.send('API is running...')
})
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
