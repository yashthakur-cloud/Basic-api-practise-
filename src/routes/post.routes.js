const express = require("express");
const router = express.Router();

router.post("/create", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }

  res.status(201).json({message: "post created successfully"});
});

module.exports = router;
