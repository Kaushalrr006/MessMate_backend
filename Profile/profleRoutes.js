const {Router} = require("express");

const {getUser,createUser} = require("../Profile/profileController");

const router = Router()

router.get('/getUser',getUser)
router.post('/createUser',createUser)


module.exports = router;
