import { useEffect, useState } from 'react';
import styles from '../styles/events.module.css'

import { useRouter } from 'next/router';
import { fetchEventos } from '@/frontend/logic/fetch';
import { useSearchParams } from 'next/navigation';
export default function Events() {
  const [events, setEvents] = useState()
  const router = useRouter();
  const searchParams = useSearchParams()


  useEffect(() => {
    const search = searchParams.get("events")
    console.log(search)
    async function fetchData() {
      if (search) { }
      const data = await fetchEventos()
      setEvents(data)
    }
    fetchData()
  }, [])


  // events.map((e) => e.imagemUrl)


  return (
    <main>
      <div>

        <div className={styles.page}>

          <div className={styles.cardContainer} >


            {events?.map(e =>
              <div className={styles.card} onClick={() => router.push(`./${e._id}`)}>
                <div className={styles.cardImage}>
                  <img src={e.imagemUrl} alt="Imagem da Vaga" />
                </div>
                <div className={styles.cardContent}>
                  <div>

                    <h3>Location</h3>
                    <p>{e.location}</p>
                    <h3>Organization</h3>
                    <p>{e.organization}</p>
                  </div>
                  <div>
                    <h3>Duration</h3>
                    <p>{e.duration}</p>
                    <h3>Objective</h3>
                    <p>{e.objective}</p>
                  </div>



                </div>
              </div>)}
          </div>
        </div>
      </div>
    </main>
  );
}