import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import { SearchBar } from './searchbar';




// export default function Header() {
//     const router = useRouter();

//     return (
//         <div className={styles.headerContainer}>

//             <div className={styles.logo}>
//                 <img src='../' alt='Logo Photo' />   {/* Colocar a logo */}
//             </div>


//             <div>
//                 <div className={styles.navLinks}>
//                     <Link href="/" className={styles.navLink}>
//                         Home
//                     </Link>
//                     <Link href="/about" className={styles.navLink}>
//                         About
//                     </Link>

//                     <Link href="/contact" className={styles.navLink}>Contact</Link>

//                 </div>
//             </div>


//             <div className={styles.globeIcon} onClick={() => router.push('./Mapa')}> {/* colocar o link da pagina MAPA */}

//             </div>

//                 <SearchBar/>
//             {/* <div className={styles.searchBar}>
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className={styles.searchInput}
//                 />
//                 <button className={styles.searchButton}>
//                     Search
//                 </button>
//             </div> */}
//             <div>
//                 <img src='../'></img>   {/* colocar a foto do profile */}
//             </div>
//         </div>
//     );
// }



// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import styles from '../styles/header.module.css'; 

 


export default function Header() {
    const router = useRouter();

    return (
        <div className={styles.headerContainer}>
          
            <div className={styles.logo}>
            <img className={styles.logoimg} src='img/logo.svg' alt='Logo Photo' />   {/* Colocar a logo  correta*/}
            </div>

          
            <div>
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>
                         HOME
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                       ABOUT
                    </Link>
                    
                        <Link href="/contact" className={styles.navLink}>CONTACT</Link>
                    
                </div>
            </div>

            
            <div className={styles.globeIcon} onClick={() => router.push('./Mapa')}> {/* colocar o link da pagina MAPA */}
            <img src={"img/globo.gif"} alt='Profile photo' />
            </div>

            
            
                <SearchBar/>
                
            
            <div>
            <img src={"img/profile.png"} alt='Profile photo' />    {/* colocar a foto do profile */}
            </div>

        </div>
    );
}
