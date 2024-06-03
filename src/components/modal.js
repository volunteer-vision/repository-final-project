import React, { useEffect, useState } from "react";
import styles from "../styles/modal.module.css";

export default function Modal({ modal, closeModal }) {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if (modal) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(closeModal, 300); 
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [modal, closeModal]);
  
  return (
    <>
      {modal && (
        <div className={`${styles.modalcontent} ${show ? styles.show : styles.hide}`}>
          <div className={styles.content}>
            <h2>S U B S C R I B E D</h2>
            <button className={styles.Xmodal} onClick={() => {
              setShow(false);
              setTimeout(closeModal, 300);
            }}>
              <b>X</b>
            </button>
          </div>
        </div>
      )}
    </>
  );
}