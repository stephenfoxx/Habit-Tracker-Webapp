import mongoose from "mongoose";

// Optional: define a sub-schema for Habit
const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: {
    type: [Boolean],
    default: [false, false, false, false, false, false, false],
  }, // 7 days
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bedtime: { type: String, default: "21:00" }, // default 9 PM
  profileImage: {type: String, default: ""},
  habits: [habitSchema], // store each user's habits
});

export default mongoose.model("User", userSchema);
