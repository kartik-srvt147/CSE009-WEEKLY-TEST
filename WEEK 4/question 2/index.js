import express from "express";

const app = express();
app.use(express.json());

let products = [];

// login
const logger = (req, res, next) => {
  console.log("middleware called");
  console.log(`API INFO: ${req.method} ${req.url}`);
  next();
};

// validation
const validateUser = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: "name and price required" });
  }
  next();
};

app.use(logger);

app.post("/products", validateUser, (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
  console.log(products);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => console.log("Server running"));
