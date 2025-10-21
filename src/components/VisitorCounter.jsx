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
        const docRef = doc(db, "siteData", "visitorCount");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const newCount = (docSnap.data().count || 0) + 1;
          await setDoc(docRef, { count: newCount });
          setCount(newCount);
        } else {
          await setDoc(docRef, { count: 1 });
          setCount(1);
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
        setCount("Error");
      }
    };

    updateCount();
  }, []);

 return (
    <div className="visitor-count">
      👀 Visitor Count: {count}
    </div>
  );
}
