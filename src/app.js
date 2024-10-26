require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const diaryRoutes = require("./routes/diaryRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/diary", diaryRoutes);
app.use("/auth", authRoutes);

// 정적 파일 제공 설정 (uploads 폴더 내 파일을 클라이언트에 제공)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = app;
