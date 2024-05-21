import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.css'; 
 


export default function Header() {
    const router = useRouter();

    return (
        <header className={styles.headerContainer}>
          
            <div className={styles.logo}>
            <img src='../' alt='Logo Photo' />   {/* Colocar a logo */}
            </div>

          
            <div>
                <nav className={styles.navLinks}>
                    <Link href="/" passHref legacyBehavior>
                        <a className={styles.navLink}>Homepage</a>
                    </Link>
                    <Link href="/about" passHref legacyBehavior>
                        <a className={styles.navLink}>About</a>
                    </Link>
                    <Link href="/contact" passHref legacyBehavior>
                        <a className={styles.navLink}>Contact</a>
                    </Link>
                </nav>
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

        </header>
    );
}
