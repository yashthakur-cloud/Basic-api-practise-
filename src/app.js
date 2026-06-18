const express = require("express");
const app = express();
const userModel = require("./models/user.model");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.rotes");
const cookieParser = require("cookie-parser")



app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use(cookieParser());

module.exports = app;
