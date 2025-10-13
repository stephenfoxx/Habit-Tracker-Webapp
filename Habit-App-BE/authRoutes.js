import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./user.js";
import { authMiddleware } from "./authMiddleware.js";

const router = express.Router();

// -------------------- REGISTER --------------------
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: err.message });
  }
});

// -------------------- LOGIN --------------------
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secret123", { expiresIn: "2h" });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        bedtime: user.bedtime,
        profileImage: user.profileImage,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------- GET PROFILE --------------------
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const { username, email, bedtime, profileImage } = req.user;
    res.json({ username, email, bedtime, profileImage });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

// -------------------- UPDATE PROFILE --------------------
router.put("/me", authMiddleware, async (req, res) => {
  try {
    const { username, bedtime } = req.body;
    if (username) req.user.username = username;
    if (bedtime) req.user.bedtime = bedtime;

    const updatedUser = await req.user.save();
    res.json({
      username: updatedUser.username,
      bedtime: updatedUser.bedtime,
      profileImage: updatedUser.profileImage,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile" });
  }
});

// -------------------- UPDATE PROFILE IMAGE --------------------
router.put("/me/image", authMiddleware, async (req, res) => {
  try {
    const { profileImage } = req.body;
    if (!profileImage)
      return res.status(400).json({ message: "No image data provided" });

    req.user.profileImage = profileImage;
    const updatedUser = await req.user.save();

    res.json({
      username: updatedUser.username,
      bedtime: updatedUser.bedtime,
      profileImage: updatedUser.profileImage,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to update image" });
  }
});

export default router;
