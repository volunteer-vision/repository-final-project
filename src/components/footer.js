

import styles from "../styles/footer.module.css"


export default function Footer() {
   return (
    <div id="footer" className={styles.footer}>
    <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
            
        </div>
        <div className={styles.footerContacts}>
        
            <h4>Contact</h4>
            <ul>
                <li>Email: volunteer.vision@gmail.com</li>
                <li>Phone: (+351) 999-999-999</li>
                <li>Address: 99 Marvila, Lisboa, Portugal</li>
            </ul>
        </div>
        <div className={styles.footerSocial}>
            <h4>Follow Us</h4>
            <ul>
                <li><a href="https://www.facebook.com" target="_blank"><img src="img/facebook-icon.png" alt="Facebook" className={styles.socialIcon}/> Facebook</a></li>
                <li className={styles.twitter}><a href="https://www.twitter.com" target="_blank"><img src="img/x-icon.png" alt="Twitter" className={styles.socialIcon}/> Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank"><img src="img/instagram-icon.png" alt="Instagram" className={styles.socialIcon}/> Instagram</a></li>
            </ul>
        </div>
    </div>
</div>
   )
}