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
