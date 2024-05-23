import { useRef } from 'react';
import styles from '../styles/header.module.css';

export function SearchBar() {
    const teste = useRef()
    async function onSubmit() {
        const option = {method: "POST", headers:{'Content-Type': 'application/json'}, body:JSON.stringify(teste.current.value)}
        const res = await fetch("/api/searchbar", option)
    }
    return (
        <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                    ref={teste}
                    
                />
                <button className={styles.searchButton} onClick={() => onSubmit()}>
                    Search
                </button>
            </div>
    )
}