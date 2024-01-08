import express from "express";
import dotenv from "dotenv";
// import path from "path";
// import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.get("/", (req, res) => {
  res.send("<h1> Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
