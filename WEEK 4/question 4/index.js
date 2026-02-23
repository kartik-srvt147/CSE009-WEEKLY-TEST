import express from "express";

const app = express();
app.use(express.json());

let currentUser = null;


app.post("/login", (req, res) => {
  const { role } = req.body;
  if (!role) return res.status(400).json({ message: "Role required" });

  currentUser = role;
  res.json({ message: `${role} LoggedIn` });
});


const auth = (req, res, next) => {
  if (!currentUser) {
    return res.status(401).json({ message: "Please login first" });
  }
  next();
};


app.get("/dashboard", auth, (req, res) => {
  if (currentUser === "Admin") {
    return res.json({ message: "Welcome Admin" });
  }
  if (currentUser === "client") {
    return res.json({ message: "Welcome Client" });
  }
});


app.get("/logout", (req, res) => {
  currentUser = null;
  res.json({ message: "Logged out successfully" });
});

app.listen(3000, () => console.log("Server running"));
