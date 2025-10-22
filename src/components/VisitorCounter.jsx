import React, { useState, useEffect } from "react";
 // install react-icons if you haven’t

function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

useEffect(() => {
  // Prevent running multiple times in development
  let hasRun = sessionStorage.getItem("hasRun");
  if (!hasRun) {
    try {
      const storedCount = localStorage.getItem("visitorCount");
      const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
      localStorage.setItem("visitorCount", newCount);
      setCount(newCount);
    } catch (err) {
      setError(true);
    }
    sessionStorage.setItem("hasRun", "true");
  } else {
    // If already run this session, just read value
    const storedCount = localStorage.getItem("visitorCount");
    setCount(storedCount ? parseInt(storedCount) : 1);
  }
}, []);

  return (
    <div>
      👁️
      <span>
        Visitor Count:{" "}
        {error ? (
          <span>Error</span>
        ) : (
          <span>{count}</span>
        )}
      </span>
    </div>
  );
}


export default VisitorCounter;