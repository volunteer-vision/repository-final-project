import { useEffect, useState } from 'react';
import styles from '../styles/events.module.css'

import { useRouter } from 'next/router';
import { fetchEventos } from '@/frontend/logic/fetch';
export default function Events() {
  const [events, setEvents] = useState()
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchEventos()
      setEvents(data)
    }
    fetchData()
  },[])
 

console.log(events)

// events.map((e) => e.imagemUrl)


    return (
        <main>
      <div>

        <div className={styles.page}>

          <div className={styles.cardContainer}>

            
              {events?.map(e => 
               <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src={e.imagemUrl} alt="Imagem da Vaga" />
              </div>
              <div className={styles.cardContent}>´

              <h3>Location</h3>
          <p>{e.location}</p>
          <h3>Organization</h3>
          <p>{e.organization}</p>
          <h3>Duration</h3>
          <p>{e.duration}</p>
          <h3>Objective</h3>
          <p>{e.objective}</p>


                <button className={styles.seeMore} onClick={() => router.push(`./${e._id}`)}>See More</button>
              </div>
              </div>)}
             </div> 
        </div>
      </div>
      </main>
    );
  }