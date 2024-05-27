import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "@/styles/cards.module.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // opcional, padrão é 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // opcional, padrão é 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // opcional, padrão é 1.
  },
};

export default function CARDS() {
  return (
    <div className={styles.containerMain}>
     

      <Carousel responsive={responsive}>
        <div className={styles.cardMurta}>
          <div>
            <img
              className={styles.headshot}
              src="/imagens/headshot1.jpg"
              alt="Photo of José Murta"
            />
            <div className={styles.testimonyContent}>
              <h3 className={styles.text}>José Murta</h3>
            </div>
          </div>
          <p className={styles.testimonyText}>
            "Volunteer work has shown me the power of community. The joy and
            gratitude from those we help remind me of the importance of giving
            back. This journey has been transformative for everyone involved."
          </p>
        </div>
        <div className={styles.cardJane}>
          <div>
            <img
              className={styles.headshot}
              src="/imagens/headshot2.jpg"
              alt="Jane Smith"
            />
            <div className={styles.testimonyContent}>
              <h3 className={styles.text}>Jane Smith</h3>
            </div>
          </div>
          <p className={styles.testimonyText}>
            "My time volunteering in Botswana was incredible. From helping local
            communities to wildlife conservation, every moment was rewarding."
          </p>
        </div>
        <div className={styles.cardMaria}>
          <div>
            <img
              className={styles.headshot}
              src="/imagens/headshot3.jpg"
              alt="Photo of Maria Gonzalez"
            />
            <div className={styles.testimonyContent}>
              <h3 className={styles.text}>Maria Gonzalez</h3>
            </div>
          </div>
          <p className={styles.testimonyText}>
            "Being a part of this volunteer program has been an unforgettable
            experience. The impact we make is profound."
          </p>
        </div>
        <div className={styles.cardJohn}>
          <div>
            <img
              className={styles.headshot}
              src="/imagens/headshot4.jpg"
              alt="Phoho of Jhon"
            />
            <div className={styles.testimonyContent}>
              <h3 className={styles.text}>John Doe</h3>
            </div>
          </div>
          <p className={styles.testimonyText}>
            "Helping people is not just good for the world, it's good for the
            soul. The impact of volunteering is immeasurable."
          </p>
        </div>
        <div className={styles.cardJoao}>
          <div>
            <img
              className={styles.headshot}
              src="/imagens/joao.jpg"
              alt="Phoho of Joao"
            />
            <div className={styles.testimonyContent}>
              <h3 className={styles.text}>João Maria</h3>
            </div>
          </div>
          <p className={styles.testimonyText}>
            "V. Vision has enriched my life. Connecting with diverse individuals
            and offering support has been deeply rewarding. The bonds we create
            and the positive changes we see are truly life-affirming."
          </p>
        </div>
        <div className={styles.cardCarlos}>
          <div>
            <img
              className={styles.headshot}
              src="/imagens/carlos.jpeg"
              alt="Photo os Carlos"
            />
            <div className={styles.testimonyContent}>
              <h3 className={styles.text}>Carlos Alegre</h3>
            </div>
          </div>
          <p className={styles.testimonyText}>
            "Volunteering has given me a new perspective on life. The
            opportunity to help those in need is truly fulfilling."
          </p>
        </div>

        <div className={styles.cardEvelyn}>
          <div>
            <img
              className={styles.headshot}
              src="/imagens/evelyn.jpg"
              alt="Photo of Evelyn"
            />
            <div className={styles.testimonyContent}>
              <h3 className={styles.text}>Evelyn Santos</h3>
            </div>
          </div>
          <p className={styles.testimonyText}>
            "Volunteering has given me a new perspective on compassion. Every
            moment helping others reinforces my belief in humanity's goodness.
            These experiences are ones I'll cherish forever."
          </p>
        </div>
      </Carousel>
    </div>
  );
}