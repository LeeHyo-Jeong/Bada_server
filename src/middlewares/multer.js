require("dotenv").config();
const multer = require("multer");
const fs = require("fs");

try {
  fs.readdirSync("uploads"); // uploads 디렉토리가 있는지 확인
} catch (err) {
  // 디렉토리가 없다면 새롭게 생성
  console.error("/uploads directory does not exist. Create new one.");
  fs.mkdirSync("uploads");
}

// multer는 파일 업로드를 처리하는 미들웨어
// storage 설정을 통해 파일이 업로드 될 위치와 파일 이름을 지정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // null: 에러가 없음
    // uploads: 파일을 저장할 디렉토리 명
    cb(null, "/uploads");
  },
  filename: (req, file, cb) => {
    // 두 번째 인자는 파일 이름
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
