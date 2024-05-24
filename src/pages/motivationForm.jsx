//motivationform.jsx

// components/MotivationForm.js
import React, { useState } from "react";
import styles from "../styles/motivatioform.module.css"
import { useRouter } from "next/router";

export default function MotivationForm() {
  const [useProfileData, setUseProfileData] = useState(false);
  const [motivationalLetter, setMotivationalLetter] = useState("");
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ useProfileData, motivationalLetter });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.checkzinho}>
          <input
            type="checkbox"
            id="useProfileData"
            checked={useProfileData}
            onChange={() => setUseProfileData(!useProfileData)}
          />
          <label htmlFor="useProfileData">Use Profile Data</label>
        </div>
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