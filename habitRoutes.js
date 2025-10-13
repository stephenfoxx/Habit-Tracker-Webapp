// habitsRoutes.js
import express from "express";
import { authMiddleware } from "./authMiddleware.js";
import User from "./user.js";
import user from "./user.js";



const router = express.Router();

// ✅ Get all habits for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  res.json(req.user.habits);  
});

// ✅ Add a new habit
router.post("/", authMiddleware, async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name required" });

  const newHabit = {
    name,
    completed: [false, false, false, false, false, false, false],
  };
  req.user.habits.push(newHabit);
  await req.user.save();
  res.status(201).json(newHabit);
});



// ✅ Update a habit’s name
router.put("/:index", authMiddleware, async (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  if (!req.user.habits[index])
    return res.status(404).json({ message: "Habit not found" });

  req.user.habits[index].name = name;
  await req.user.save();
  res.json(req.user.habits[index]);
});



// ✅ Toggle completion for a specific day
router.patch("/:index/day/:dayIndex", authMiddleware, async (req, res) => {
  const { index, dayIndex } = req.params;
  if (!req.user.habits[index])
    return res.status(404).json({ message: "Habit not found" });

  req.user.habits[index].completed[dayIndex] =
    !req.user.habits[index].completed[dayIndex];

  await req.user.save();
  res.json(req.user.habits[index]);
});

// ✅ Delete a habit
router.delete("/:index", authMiddleware, async (req, res) => {
  const { index } = req.params;
  if (!req.user.habits[index])
    return res.status(404).json({ message: "Habit not found" });

  req.user.habits.splice(index, 1);
  await req.user.save();
  res.json({ message: "Habit deleted" });
});

export default router;
