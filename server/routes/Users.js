const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");

router.post("/", async (req, res) => {
  const { phoneNumber, password } = req.body;
  const check = await Users.findOne({ where: { phoneNumber: phoneNumber } });

  if (check) {
    res.json({ error: "User exists" });
    return;
  }
  // Hash the password
  const hash = await bcrypt.hash(password, 10);

  // Create user in the database
  await Users.create({
    phoneNumber: phoneNumber,
    password: hash,
  });

  res.json({ message: "SUCCESS" });
});
router.post("/login", async (req, res) => {
  const { phoneNumber, password } = req.body;

  const user = await Users.findOne({ where: { phoneNumber: phoneNumber } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
    return;
  }

  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match)
      res.json({ error: "Wrong phoneNumber And Password Combination" });

    const accessToken = sign(
      { phoneNumber: user.phoneNumber, id: user.id },
      "importantsecret"
    );

    res.json({ accessToken });
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
