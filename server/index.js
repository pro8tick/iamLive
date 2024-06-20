import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { join, resolve } from "path";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import categoryRouter from "./routes/category.route.js";
import cookieParser from "cookie-parser";
// Get directory path of the current module

const __dirname = resolve();

dotenv.config();

mongoose
  .connect(process.env.mongoURL)
  .then(() => {
    console.log("connected to mongo server");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000 !!!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);
app.use("/api/category", categoryRouter);

app.use(express.static(join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "client", "dist", "index.html"));
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
