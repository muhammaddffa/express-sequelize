import express from "express";
import SiswaRoute from "./routes/SiswaRoute.js";
import authRoute from "./routes/authRoute.js";
import UserRoute from "./routes/UserRoute.js"

const app = express();
app.use(express.json());
app.use(SiswaRoute);
app.use(UserRoute);

app.use(authRoute);

app.get("/", async (req, res) => {
  res.send({ message: "Awesome it works 🐻" });
});
app.listen(1313, () => {
  console.log("Server up and running.....");
});
