//motivationform.jsx

// components/MotivationForm.js
import React, { useState } from "react";
import styles from "../../styles/motivatioform.module.css"
import { useRouter } from "next/router";

// localStorage.setItem("userId", "safaguih32uu21")
// localStorage.getItem("userId")

export default function MotivationForm() {
  const [useProfileData, setUseProfileData] = useState(false);
  const [motivationalLetter, setMotivationalLetter] = useState("");
  const router = useRouter()
  
  const  handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission
      const res = await fetch ("/api/submit",{
      method:"POST", 
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        data:motivationalLetter,
        eventId: router.query.offer,
        userId: "664e0391179116f43c5abbf0"
      })
    })
    const id = await res.json()
    console.log(id)
    router.push("/sucssessSubmit")
  };

  return (
    
    
      <div className={styles.container}>
        <h2 className={styles.title}>Motivational Letter</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
      
          <div>
            <textarea
              id="motivationalLetter"
              value={motivationalLetter}
              onChange={(e) => setMotivationalLetter(e.target.value)}
              // onSubmit={handleSubmit}
              className={styles.textarea}
              placeholder="Enter your motivational letter here..."
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton} onClick={() => router.push("./sucssessSubmit")}>
            Submit
          </button>
        </form>
      </div>
    
  );
}