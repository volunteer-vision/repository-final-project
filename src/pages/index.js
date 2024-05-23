// import styles from "../styles/Home.module.css"

// export default function Home() {
//   return (
//     <div>
//       <main className={styles.mainphrase}>

//         <h1 className={styles.phrase}>Volunteer today, impact tomorrow</h1>

//         <hr></hr>

//         <div className={styles.buttondiv}>

//           <button className={styles.volunteerbutton}>Volunteer Now</button>

//         </div>





//         <div className={styles.gridMain1}>

//           <img src='imagens/foto1.jpg' alt='photo' /><img src='imagens/foto2.jpg' alt='photo' />

//         </div>

//         <div className={styles.gridMain2}>

//           <img src='imagens/foto3.jpg' alt='photo' /><img src='imagens/foto4.jpg' alt='photo' />

//         </div>





//         <div>

//           <h2 class={styles.journey}>Start your journey!</h2>

//           <img className={styles.mapaimg} src='imagens/foto5.png' alt='photo' />

//         </div>

//       </main>

//     </div>
//   );
// }

import Header from "../components/header";
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div>


      <main className={styles.mainphrase}>
        <h1 className={styles.phrase}>Volunteer today, <p>impact tomorrow</p></h1>

        <div className={styles.horizontalline}></div>

        <div className={styles.buttondiv}>
          <button className={styles.volunteerbutton}>Volunteer Now</button>
        </div>

        <div className={styles.gridMain1}>
          <img className={styles.imageshome} src='imagens/foto1.jpg' alt='photo' /><img className={styles.imageshome} src='imagens/foto2.jpg' alt='photo' />
        </div>

        <div className={styles.testimonies}>
          <div className={styles.testimonies1}>

            <div className={styles.textimonies}>
              <p>"My time volunteering in Botswana was incredible. From helping local communities to wildlife conservation, every moment was rewarding."</p>
            </div>
            <div className={styles.josemurta}><h3>José Murta</h3></div>

            <img className={styles.headshot1} src='imagens/headshot1.jpg' alt='photo' />

          </div>

          <div className={styles.testimonies2}>

            <div className={styles.textimonies}>
              <p>"We are so grateful to be able</p>
            </div>

            <img className={styles.headshot2} src='imagens/headshot2.jpg' alt='photo' />

          </div>
          <div className={styles.testimonies3}>

            <div className={styles.textimonies}>
              <p>"We are so grateful to be able to help people who are in need. We are so grateful to be able to help people who are in need."</p>
            </div>

            <img className={styles.headshot3} src='imagens/headshot3.jpg' alt='photo' />
          </div>

          <div className={styles.testimonies4}>

            <div className={styles.textimonies}>
              <p>"We are so grateful to be able</p>
            </div>

            <img className={styles.headshot4} src='imagens/headshot4.jpg' alt='photo' />

          </div>
        </div>

        <div>
          <h2 class={styles.journey}>Start your journey!</h2>
          <img className={styles.mapaimg} src='imagens/foto5.png' alt='photo' />
        </div>
      </main>

    </div>
  );
}