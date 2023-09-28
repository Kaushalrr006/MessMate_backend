const {Router} = require("express");

const {getCard,createCard} = require("../Admin/adminControllers")

const router = Router()

router.get('/get',getCard)
router.post('/create',createCard)


module.exports = router;
