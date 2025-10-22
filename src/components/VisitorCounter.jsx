import { useState, useEffect, useRef } from "react";
import { db } from "./firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function VisitorCounter() {
  const [count, setCount] = useState("Loading...");
  const hasUpdated = useRef(false); 

  useEffect(() => {
    if (hasUpdated.current) return; 
    hasUpdated.current = true;

    const updateCount = async () => {
      try {
        console.log("Attempting to update visitor count...");
        console.log("DB instance:", db); // Check if db is defined
        
        const docRef = doc(db, "siteData", "visitorCount");
        console.log("Document reference created");
        
        const docSnap = await getDoc(docRef);
        console.log("Document fetched:", docSnap.exists());

        if (docSnap.exists()) {
          const newCount = (docSnap.data().count || 0) + 1;
          await setDoc(docRef, { count: newCount });
          setCount(newCount);
        } else {
          await setDoc(docRef, { count: 1 });
          setCount(1);
        }
        console.log("Count updated successfully");
      } catch (error) {
        console.error("Detailed error:", error);
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        setCount("Error");
      }
    };

    updateCount();
  }, []);

  return (
    <>
     <div className="visitor-count">
      <p>👀 Visitor Count: {count}</p>
      
    </div>
    <div className="mobile-visitor-count">
      <p >👀 Visitor Count: {count}</p>
    </div>
    </>
   

    
  );
}