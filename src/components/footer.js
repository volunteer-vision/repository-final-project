import styles from "../styles/footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";

import toast, { Toaster } from "react-hot-toast";

//npm i react-icons

export default function Footer() {
  // const [openModal, setModal] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // setModal(true);
    setEmail("");
    toast.success('Subscribed', {
      style: {
        border: '1px solid #2962ff' ,
        padding: '16px',
        color: '#2962ff',
      },
      iconTheme: {
        primary: '#2962ff',
        secondary: '#ffffff',
      },
      position: 'top-right',
    });

  };

  return (
    <div className={styles.footer} id="footer">
      <Toaster
      />
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <div className={styles.newstext}>
            <h3>
              <b>SUBSCRIBE OUR NEWSLETTER</b>
            </h3>
            <div className={styles.newsubmit}>
              <input
                className={styles.buttonemail}
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button
                className={styles.buttonsub}
                onClick={handleSubmit}
              >
                Submit
              </button>
              {/* <Modaltest modal={openModal} closeModal={() => setModal(false)} /> */}
            </div>
          </div>

          {/* <div className={styles.newbutton}>
            <button className={styles.buttonsub}>
              <b>@ S U B S C R I B E</b>
            </button>
          </div> */}
        </div>
        <div className={styles.line}></div>
        <div className={styles.footerinfo}>
          <div className={styles.text}>
            <h3>
              <b>CONTACT US</b>
            </h3>
            <ul>
              <li>
                <b>Email:</b> volunteer.vision@gmail.com
              </li>
              <li>
                <b>Phone:</b> (+351) 999-999-999
              </li>
              <li>
                <b>Address:</b> 99 Marvila, Lisboa, Portugal
              </li>
            </ul>
          </div>
          <div className={styles.icons}>
            <ul>
              <li>
                <a href="https://www.linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <FaSquareXTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com">
                  <FaInstagramSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.rights}>
        {/* <img className={styles.rightsIcon} src="./imagens/copy.png"/> */}
        <FaRegCopyright />
        All rights reserved
      </div>
    </div>
  );
}