import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { nis, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      nis,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ 
        result: user, 
        message: "User Registered succesfully"
     });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error in registering user" });
  }
};

export const signInUser = async (req, res) => {
  try {
    const { nis, password } = req.body;
    const user = await User.findOne({
      where: { nis },
    });
    if (!user) {
      return res.status(400).json("Invalid Credentials");
    }

    // Verify password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(400).json("Invalid Credentials");
    }

    // Authenticate user with jwt
    const token = jwt.sign({ id: user.id }, "123brof", {
      expiresIn: "1h",
    });
    res.json({ result: user, token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Sign in error");
  }
};

export function VerifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }
  try {
    const decoded = jwt.verify(token.split(" ")[1], "123brof");
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error Verify token:", error);
    res.status(401).json({
      message: "Invalid Token",
    });
  }
}
