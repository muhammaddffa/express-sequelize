import express from "express";
import SiswaRoute from "./routes/SiswaRoute.js";
import authRoute from "./routes/authRoute.js";
import UserRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(SiswaRoute);
app.use(UserRoute);

app.use(authRoute);

app.get("/", async (req, res) => {
  res.send({ message: "Awesome it works 🐻" });
});
app.listen(4000 , () => {
  console.log("Server up and running.....");
});

export default app;
