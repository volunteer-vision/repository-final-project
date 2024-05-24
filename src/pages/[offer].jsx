import { useRouter } from "next/router";
import styles from "../styles/offer.module.css";
import { useEffect, useState } from "react";
import { fetchEventosById } from "@/frontend/logic/fetch";


export default function Offer() {
  const [events, setEvents] = useState()
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const id = router.query.offer
      console.log(id)
      const data = await fetchEventosById(id)
      setEvents(data)
    }
    fetchData()
  },[])
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.container}>
        <h1 className={styles.hederText}>Título da vaga</h1>
          <div className={styles.headerContent}>
            <div className={styles.header}>
              <img src={events?.imgUrlOffer1} alt="Foto construindo casa" />
              <img src={events?.imgUrlOffer2}  alt="Foto construindo casa" />
              
            </div>
            <div className={styles.content}>
              <h2>Commitment</h2>
              <p>{events?.commitment}</p>
              <h2>Effort</h2>
              <p>{events?.effort}</p>
              <h2>Mission</h2>
              <p>{events?.mission}</p>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card1}>
              <h2>+150</h2>
              <p>New Houses</p>
            </div>
            <div className={styles.card2}>
              <h2>200+</h2>
              <p>Volunteers</p>
            </div>
            <div className={styles.card3}>
              <h2>Free</h2>
              <p>Stay & Food</p>
            </div>
          </div>
          <button className={styles.applyBtn} onClick={() => router.push('./motivationForm')}>Apply Now!</button>
        </div>
      </main>
    </div>
  );
}