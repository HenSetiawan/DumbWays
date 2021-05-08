const express = require("express");
const app = express();
const multer = require("multer");
const booksRouter = require("./src/Router/BooksRouter");

// SETTING MULTER
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const unixName = new Date().getTime();
    cb(null, `${unixName}-${file.originalname}`);
  },
});

const filterFile = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: filterFile }).single("image")
);

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", booksRouter);

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
