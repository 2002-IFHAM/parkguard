const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = require("./models");

const userRouter = require("./routes/Users");
app.use("/auth", userRouter);

const detailsRouter = require("./routes/Cardetails");
app.use("/cardetails", detailsRouter);

db.sequelize.sync().then(() => {
  app.listen(8083, () => {
    console.log("server running on 8083");
  });
});
