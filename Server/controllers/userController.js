import User from "../model/UserSchema.js";

export const getUser = async (req, res) => {

    console.log("yaha tak");
    console.log(req.user);
    console.log("✅ Hit GET /api/user/me route");

    
    
  try {
    const user = await User.findById(req.user.userId).select("-password");
// const user = await User.findOne({ _id: req.user.userId }).select("-password");

console.log(user,"bhai user tak");



    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
