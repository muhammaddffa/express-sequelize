import User from "../models/User.js";

export const userInfo = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    console.log(user);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user info", error);
    console.log(error.message);
  }
};
