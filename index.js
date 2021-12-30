const express = require("express");
const FileRouter = require("./Routers/File.Routes");

const app = express();
const port = process.env.port || 3000;

app.use("/File", FileRouter);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
