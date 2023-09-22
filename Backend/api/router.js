const router = require("express").Router();
const { Home, Group_create, New_Messages } = require("../handler/handle");

router.get('/home', Home)
router.post("/group/create", Group_create)
router.post('/messages/new', New_Messages)

module.exports = router;