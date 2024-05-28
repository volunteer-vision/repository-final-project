

import { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

import { useRouter } from 'next/router';
import CARDS from '@/components/cards';
import MapChart from '@/components/MapComponent';

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    document.body.classList.add(styles.lightboxOpen);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.classList.remove(styles.lightboxOpen);
  };

  return (
    <div>
      <main className={styles.mainpage}>

        <div className={styles.mainpagecolor1}>
          <div className={styles.mainpageparentcontainer}>
            <div className={styles.mainpagechildcontainer1}>
              <img className={styles.imagemprincipal} src='imagens/gaja2.png' alt='Logo Photo' />
            </div>
            <div className={styles.mainpagechildcontainer2}>
              <h1 className={styles.maintitle}>Volunteer today,<br></br> impact tomorrow</h1>
              <p className={styles.maintext}>Make a difference in conservation, education, healthcare, or community development. We connect you with causes that need you. Apply now & change lives (yours too)!</p>
              <button className={styles.learnmore} onClick={() => router.push('/about')}>Learn More</button>
            </div>
          </div>
        </div>
<div className={styles.mainpagecolor2}>
          <div className={styles.secondpageparentcontainer}>
            <div className={styles.cardtemplate}>
              <div className={styles.cardimagetemplate}>
                <img className={styles.icones} src='imagens/house.png' alt='Logo Photo' />
              </div>
              <div className={styles.cardtexttemplate}>
                <h1 className={styles.cardstitle}>+1300</h1>
                <h1 className={styles.cardstext}>New Houses</h1>
              </div>
            </div>
            <div className={styles.cardtemplate}>
              <div className={styles.cardimagetemplate}>
                <img className={styles.icones} src='imagens/volunteer.png' alt='Logo Photo' />
              </div>
              <div className={styles.cardtexttemplate}>
                <h1 className={styles.cardstitle}>20.000</h1>
                <h1 className={styles.cardstext}>Volunteers</h1>
              </div>
            </div>
            <div className={styles.cardtemplate}>
              <div className={styles.cardimagetemplate}>
                <img className={styles.icones} src='imagens/food.png' alt='Logo Photo' />
              </div>
              <div className={styles.cardtexttemplate}>
                <h1 className={styles.cardstitle}>Free</h1>
                <h1 className={styles.cardstext}>Stay & Food</h1>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.startyourjourney}>
          <h2 className={styles.secondtitles} id='mapa'>Start your journey!</h2>
          <p className={styles.startyourjourneyparagraph}>Click on this map to choose your region and begin your adventure</p>
          <MapChart/>
        </div>
        <div className={styles.cardsmaincolor}>
            <CARDS />
        </div>

        <div className={styles.mainpagecolor4}>
          <div className={styles.ourvolunteers}>
            <h2 className={styles.secondtitles}>Check out our volunteers</h2>
          </div>
<div className={styles.gallery}>
            <div className={styles.imagewrapper} onClick={() => openLightbox('imagens/fotolightbox1.jpg')}>
              <img src='imagens/fotolightbox1.jpg' alt='photo' width={300} />
            </div>
            <div className={styles.imagewrapper} onClick={() => openLightbox('imagens/fotolightbox2.png')}>
              <img src='imagens/fotolightbox2.png' alt='photo' width={300} />
            </div>
            <div className={styles.imagewrapper} onClick={() => openLightbox('imagens/fotolightbox3.png')}>
              <img src='imagens/fotolightbox3.png' alt='photo' width={300} />
            </div>
            <div className={styles.imagewrapper} onClick={() => openLightbox('imagens/fotolightbox4.png')}>
              <img src='imagens/fotolightbox4.png' alt='photo' width={300} />
            </div>
            <div className={styles.imagewrapper} onClick={() => openLightbox('imagens/fotolightbox5.png')}>
              <img src='imagens/fotolightbox5.png' alt='photo' width={300} />
            </div>
            <div className={styles.imagewrapper} onClick={() => openLightbox('imagens/fotolightbox6.png')}>
              <img src='imagens/fotolightbox6.png' alt='photo' width={300} />
            </div>
          </div>

          {lightboxImage && (
            <div className={styles.lightbox} onClick={closeLightbox}>
              <span className={styles.close} onClick={closeLightbox}>&times;</span>
              <img src={lightboxImage} alt='photo' className={styles.lightboximg} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}