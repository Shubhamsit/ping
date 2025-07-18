import bcrypt from "bcryptjs";
import User from "../model/UserSchema.js";
import jwtToken from "../utils/jwtToken.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for missing fields

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and password.",
      });
    }

    // Check if user already exists

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }

    // Hash password

    const hashPassword = bcrypt.hashSync(password, 10);

    // Create and save user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    // Send success response

    res.status(201).json({ success: true, message: "Sign Up Successful" });
  } catch (error) {
    console.error("Signup Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
    });
  }
};

// Login

export const Login = async (req, res) => {
  try {
   

    const { email, password } = req.body;
    const user = await User.findOne({ email });



    if (!user)
      return res
        .status(404)
        .send({ success: false, message: "Email Dosen't Exist Register" });

    const comparePassword = bcrypt.compareSync(password, user.password || "");

    if (!comparePassword)
      return res.json({
        success: false,
        message: "Email Or Password dosen't Matching",
      });

 

    const token = jwtToken(user._id, res);
 

    res.status(200).json({
      success: true,
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
      message: "Succesfully LogIn",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
    console.log(error);
  }
};

// Logout

export const LogOut = async (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "None",
    });

    res.status(200).send({ success: true, message: "user Logout" });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
    console.log(error);
  }
};
