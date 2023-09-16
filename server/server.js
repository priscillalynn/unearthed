import express from "express";
import giftsRouter from "./routes/gifts.js";

const app = express();

app.use("/scripts", express.static("./public/scripts"));


app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>'
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.use('/gifts', giftsRouter);