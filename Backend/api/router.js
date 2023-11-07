const router = require("express").Router();
const {
  Home,
  Group_create,
  New_Messages,
  All_rooms,
  Rooms_info,
  Messages_info,
} = require("../handler/handle");

router.get("/home", Home);
router.post("/group/create", Group_create);
router.post("/messages/new", New_Messages);
router.get("/all/rooms", All_rooms);
router.get("/rooms/:id", Rooms_info);
router.get("/messages/:id", Messages_info);
module.exports = router;
