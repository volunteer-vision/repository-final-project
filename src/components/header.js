import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css'; 

 


export default function Header() {
    const router = useRouter();

    return (
        <div className={styles.headerContainer}>
          
            <div className={styles.logo}>
            <img src='../' alt='Logo Photo' />   {/* Colocar a logo */}
            </div>

          
            <div>
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>
                         Home
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                       About
                    </Link>
                    
                        <Link href="/contact" className={styles.navLink}>Contact</Link>
                    
                </div>
            </div>

            
            <div className={styles.globeIcon} onClick={() => router.push('./Mapa')}> {/* colocar o link da pagina MAPA */}
                
            </div>

            
            <div className={styles.searchBar}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className={styles.searchInput} 
                />
                <button className={styles.searchButton}>
                    Search
                </button>
            </div>
            <div>
            <img src={"./"} alt='Profile photo' />    {/* colocar a foto do profile */}
            </div>

        </div>
    );
}