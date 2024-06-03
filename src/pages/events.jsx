// import { useEffect, useState } from 'react';
// import styles from '../styles/events.module.css'

// import { useRouter } from 'next/router';
// import { fetchEventos, fetchEventosByValue } from '@/frontend/logic/fetch';
// import { useSearchParams } from 'next/navigation';
// export default function Events() {
//   const [events, setEvents] = useState()
//   const router = useRouter();
//   const searchParams = useSearchParams()


//   useEffect(() => {
//     console.log(router.query)
//     const search = searchParams.get("events")
//     async function fetchData() {
//       let data
//       if (search) {
//         data = await fetchEventosByValue(search)
//       } else {
//         data = await fetchEventos()
//       }

//       if (data) {
//         console.log(data)
//         setEvents(data)
//       }
//     }
//     fetchData()
//   }, [router.query])


//   // events.map((e) => e.imagemUrl)


//   return (
//     <main>
//       <div>

//         <div className={styles.page}>

//           <div className={styles.cardContainer} >


//             {events?.map(e =>
//               <div className={styles.card} onClick={() => router.push(`./${e._id}`)}>
//                 <div className={styles.cardImage}>
//                   <img src={e.imagemUrl} alt="Imagem da Vaga" />
//                 </div>
//                 <div className={styles.cardContent}>
//                   <div>

//                     <h3>Location</h3>
//                     <p>{e.location}</p>
//                     <h3>Organization</h3>
//                     <p>{e.organization}</p>
//                   </div>
//                   <div>
//                     <h3>Duration</h3>
//                     <p>{e.duration}</p>
//                     <h3>Objective</h3>
//                     <p>{e.objective}</p>
//                   </div>



//                 </div>
//               </div>)}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


import { useEffect, useState } from 'react';
import styles from '../styles/events.module.css'

import { useRouter } from 'next/router';
import { fetchEventos, fetchEventosByValue } from '@/frontend/logic/fetch';
import { useSearchParams } from 'next/navigation';


export default function Events() {
  const [events, setEvents] = useState()
  const router = useRouter();
  const searchParams = useSearchParams()


  useEffect(() => {
    console.log(router.query)
    const search = searchParams.get("events")
    async function fetchData() {
      let data
      if (search) {
        data = await fetchEventosByValue(search)
      } else {
        data = await fetchEventos()
      }

      if (data) {
        console.log("coias :",data)
        setEvents(data)
      }
    }
    fetchData()
  }, [router.query])


  // events.map((e) => e.imagemUrl)


  return (
    <main>
      <div>
      <div className={styles.pagecolor2}>
          <h1 className={styles.headerText}>Our Offers</h1>
        </div>
<div className={styles.pagecolor}>
  
          <div className={styles.page}>
  
            <div className={styles.cardContainer} >
  
  
              {events?.map(e =>
                <div className={styles.card} onClick={() => router.push(`./${e._id}`)}>
                  <div className={styles.cardImage}>
                    <img src={e.imgUrl} alt="Imagem da Vaga" />
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

      </div>
    </main>
  );
}