const router = require("express").Router();

// the controller

const { userLogin, singUp, } = require("../../controllers/authcontrollers/authcontroller")

// the controller ends


// this is for login;
router.get("/userlogin", userLogin);

// this is for create account;
router.post("/sing_up", singUp);


module.exports = router
