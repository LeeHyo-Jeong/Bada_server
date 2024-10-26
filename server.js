// 서버 초기화 및 시작

// 현재 디렉토리 출력
console.log(__dirname);

const app = require("./src/app");
const mongoose = require("mongoose");
// 포트 설정
const PORT = process.env.PORT;

// DB 연결
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
