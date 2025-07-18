import jwt from "jsonwebtoken";

const jwtToken = (userId, res) => {

  const token = jwt.sign(
    { userId: userId.toString() },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "None",
    // sameSite: "Lax",
    secure: true,
    path: "/",
  });

  return token;
};

export default jwtToken;
