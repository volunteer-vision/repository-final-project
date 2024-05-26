import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/cards.module.css';

export default function CARD() {
  const router = useRouter();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const handleNext = () => {
      setCounter(prevCounter => (prevCounter + 1) % cards.length); 
    };

    const handlePrev = () => {
      setCounter(prevCounter => (prevCounter - 1 + cards.length) % cards.length); 
    };

    const updateCardPosition = () => {
      cards.forEach((card, index) => {
        card.style.transform = `translateX(-${counter * 100}%)`;
      });
    };

    updateCardPosition(); 

  
    document.querySelector('.nextButton').addEventListener('click', handleNext);
    document.querySelector('.prevButton').addEventListener('click', handlePrev);

    return () => {
     
      document.querySelector('.nextButton').removeEventListener('click', handleNext);
      document.querySelector('.prevButton').removeEventListener('click', handlePrev);
    };
  }, [counter]); 

  return (
    <div className={styles.container}>
       
          <button className="prevButton">Antes</button>         
          <div className={styles.cardContainer}>

            <div className={styles.card}>
              <div >
                  <img className={styles.headshot} src='/imagens/headshot1.jpg' alt='José Murta' />
                  <div className={styles.testimonyContent}>
                    <h3 className={styles.testimonyAuthor}>José Murta</h3>
                  </div>
              </div>
              <p className={styles.testimonyText}>
                "Volunteering has given me a new perspective on life. The opportunity to help those in need is truly fulfilling."
              </p>
            </div>

            <div className={styles.card}>
              <div>
                  <img className={styles.headshot} src='/imagens/headshot2.jpg' alt='Jane Smith' />
                  <div className={styles.testimonyContent}>
                    <h3 className={styles.testimonyAuthor}>Jane Smith</h3>
                  </div>
              </div>
              <p className={styles.testimonyText}>
                "My time volunteering in Botswana was incredible. From helping local communities to wildlife conservation, every moment was rewarding."
              </p>
            </div>

            <div className={styles.card}>
              <div>
                  <img className={styles.headshot} src='/imagens/headshot3.jpg' alt='Maria Gonzalez' />
                  <div className={styles.testimonyContent}>
                    <h3 className={styles.testimonyAuthor}>Maria Gonzalez</h3>
                  </div>
              </div>
              <p className={styles.testimonyText}>
                "Being a part of this volunteer program has been an unforgettable experience. The impact we make is profound."
              </p>
            </div>

            <div className={styles.card}>
              <div>
                  <img className={styles.headshot} src='/imagens/headshot4.jpg' alt='John Doe' />
                  <div className={styles.testimonyContent}>
                    <h3 className={styles.testimonyAuthor}>John Doe</h3>
                  </div>
              </div>
              <p className={styles.testimonyText}>
                "Helping people is not just good for the world, it's good for the soul. The impact of volunteering is immeasurable."
              </p>
            </div>

          </div>
        
          <button className="nextButton">Frente</button>
     
     
    </div>
  );
}