import mongoose from "mongoose";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is working fine in port 5000");
});

const URL =
  "mongodb+srv://anish:anish123@cluster0.x250z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
