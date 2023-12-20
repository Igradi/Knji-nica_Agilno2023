const { getUserInfo } = require("../controllers/UserControllers");
const router = require("express").Router();

router.get("/userInfoById", getUserInfo);

module.exports = router;
