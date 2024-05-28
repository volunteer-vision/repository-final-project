

import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import { FaUser } from 'react-icons/fa';
import { AiOutlineSearch } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { useRef } from 'react';




export default function Header() {
    const router = useRouter();
    const searchBarValue = useRef()

    return (
        <div className={styles.headercolor}>
            <div className={styles.headerContainer}>

                <div >
                    <img className={styles.logoPrincipal} src='../imagens/logo.png' alt='Logo Photo' onClick={() => router.push('/')} />   {/* Colocar a logo */}
                </div>


                <div>
                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>
                        <Link href="/about" className={styles.navLink}>
                            About
                        </Link>

                        <Link href="#footer" className={styles.navLink}>Contact</Link>

                        <Link href="/events" className={styles.navLink}>
                            Events
                        </Link>

                    </div>
                </div>



                <Link href="#mapa"><FaGlobeAmericas  className={styles.globeIcon} /></Link>
                
               


                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                        ref={searchBarValue}
                    />
                <button className={styles.searchButton} onClick={() => router.push(`/events?events=${searchBarValue.current.value}`)}>
                        <AiOutlineSearch className={styles.searchIcon}/>
                    </button>
                </div>
                <div>
                     
                    <FaUser className = {styles.profileIcon} src={"imagens/profileicon.png"} alt='Profile photo' onClick={() => router.push('./profile')}/>
                    {/* colocar a foto do profile */}
                </div>
            </div>
        </div>
    );
}

