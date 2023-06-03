const { Router } = require("express");
const userController = require("./usersController/usersController");

let myfunc = (req, res, next) => {
    console.log('equipo clase 52225');
    next();
}

module.exports = app => {
    let router = new Router();
    app.use("/api/users", router);
    router.use(myfunc);
    router.get("/", myfunc,  userController.get);
    router.post("/",  userController.create)
}