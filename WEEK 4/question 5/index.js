import express from "express";
import "./db.js";
import Product from "./product.model.js";

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

app.put("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
});

app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

app.listen(3000, () => console.log("Server running"));
