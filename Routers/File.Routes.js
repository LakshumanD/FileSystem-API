const FileServices = require("../Services/File.Services");

const Router = require("express").Router();

Router.get("/", FileServices.getFiles);
Router.post("/create", FileServices.create);
module.exports = Router;
