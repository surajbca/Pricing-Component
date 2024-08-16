import React, { useState, useEffect } from "react";
import Pricing from "./components/Pricing";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          My App
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-800 p-2 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main>
        <Pricing />
      </main>
    </div>
  );
}

export default App;
