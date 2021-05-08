const express = require("express");
const app = express();
const booksRouter = require("./src/Router/BooksRouter");

app.use("/api/", booksRouter);

// body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
