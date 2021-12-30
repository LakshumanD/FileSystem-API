const fs = require("fs");

const Path = __dirname; ///Users/Lakshumanasamy/Documents/zen/Task/Session40/data/";
const FileServices = {
  async getFiles(req, res) {
    try {
      console.log(__dirname);
      fs.readdir(Path, (err, files) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          console.log("\nCurrent directory filenames:");
          files.forEach((file) => {
            console.log(file);
          });
          return res.send(files);
        }
      });
    } catch (err) {}
  },
  async create(req, res) {
    try {
      let d = new Date();
      let content = `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
      // console.log(content);
      fs.writeFile(`${Path}/${content.toString()}.txt`, d.toString(), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send("file written successfully");
      });
    } catch (err) {}
  },
};
module.exports = FileServices;
