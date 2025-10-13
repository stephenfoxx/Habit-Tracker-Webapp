import { createContext, useState, useEffect } from "react";

export const HabitsContexts = createContext();

export default function HabitContent({ children }) {
  const [habits, setHabits] = useState([]);
  const [activeBoxes, setActiveBoxes] = useState([]);

  useEffect(() => {
    async function loadHabits() {
      const token = localStorage.getItem("token");

      // Only fetch if token exists
      if (!token) {
        console.log("No token found, skipping habits fetch.");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/habits", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          console.error("Failed to load habits:", data);
          setHabits([]);
          setActiveBoxes([]);
          return;
        }

        if (!Array.isArray(data)) {
          console.error("Unexpected data format:", data);
          setHabits([]);
          setActiveBoxes([]);
          return;
        }

        setHabits(data);
        setActiveBoxes(data.map(() => Array(7).fill(false)));
      } catch (err) {
        console.error("Error fetching habits:", err);
      }
    }

    loadHabits();
  }, []);

  return (
    <HabitsContexts.Provider
      value={{ habits, setHabits, activeBoxes, setActiveBoxes }}
    >
      {children}
    </HabitsContexts.Provider>
  );
}
