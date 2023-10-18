const Messages = require("../model/dbMessages");
const Rooms = require("../model/dbRooms");

exports.Home = (req, res) => {
  res.send("Welcome to the backend");
};

exports.Group_create = async (req, res) => {
  try {
    const name = req.body.groupName;
    await Rooms.create({ name });
    return res.status(201).json({
      success: true,
      message: "Group created successfully",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

exports.New_Messages = async (req, res) => {
  try {
    const dbMessage = req.body;
    await Messages.create(dbMessage);
    return res.status(201).json({
      success: true,
      message: "Group created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.All_rooms = async (req, res) => {
  try {
    const group_detail = await Rooms.find({});
    return res.status(200).send(group_detail);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.Rooms_info = async (req, res) => {
  try {
    const data = await Rooms.findOne({ _id: req.params.id }).exec();
    if (!data) {
      return res.status(404).json({ message: "Room not found" });
    }
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
