import styles from "../styles/footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

//npm i react-icons

export default function Footer() {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <div className={styles.newstext}>
            <h3>
              <b>SUBSCRIBE OUR NEWSLETTER</b>
            </h3>
            <div className={styles.newsubmit} >
              <input className={styles.buttonemail} type="email" placeholder="Enter your Email"></input>
              <button className={styles.buttonsub} >Submit</button>
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
      <div className={styles.rights}>@ All rights deserved</div>
    </div>
  );
}