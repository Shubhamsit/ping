import User from "../model/UserSchema.js";

export const getUser = async (req, res) => {
  console.log(req.user);

  try {
    const user = await User.findById(req.user.userId).select("-password");

    // const user = await User.findOne({ _id: req.user.userId }).select("-password");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
