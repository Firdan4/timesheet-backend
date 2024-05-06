import express from "express";
import cors from "cors";
import router from "./routes/router";
import dotenv from "dotenv";
import sequelize from "./config/db";

dotenv.config();

const app = express();
// const port = process.env.PORT || 3002;
const port = process.env.PORT || 3002;

app.use(express.json({ limit: "5mb" }));

app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// test koneksi
sequelize
  .authenticate()
  .then(() => {
    console.log("connection to database successfully!");
  })
  .catch(() => {
    console.log("connection to database error!");
  });

app.use("/", router);

app.listen(port, () => {
  console.log(`Server Running in http://localhost:${port}`);
});
