import styles from '../styles/about.module.css'; 
export default function About() {
    return (
        <div className={styles.main}>
            <section className={styles.introduction}>
                <div className={styles.textBlock}>
                    <h2 className={styles.sectionTitle}>Our Identity</h2>
                    <p className={styles.sectionText}>
                        We are a company specialized in the recruitment and management of volunteers for major social causes. We act as a bridge between large companies that need dedicated workforce for social projects and volunteers willing to make a difference in various parts of the world. Our mission is to facilitate the mobilization of human resources for important causes, promoting positive global impact.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <img src="imagens/time.jpg" alt="Our Team" className={styles.teamImage}/>
                </div>
            </section>
            <section className={styles.importance}>
                <div className={styles.imageBlock}>
                    <img src="imagens/voluntariado1.jpeg" alt="Importance of Website" className={styles.importanceImage}/>
                </div>
                <div className={styles.textBlock}>
                    <h2 className={styles.sectionTitle}>Why Do I Need a Website?</h2>
                    <p className={styles.sectionText}>
                        <strong>Visibility:</strong> A website increases your company's visibility, allowing businesses and volunteers to easily find information about the services offered.<br />
                        <strong>Ease of Access:</strong> Provides a platform where stakeholders can sign up and get detailed information.<br />
                        <strong>Efficient Management:</strong> Facilitates the management of registrations, selection processes, and communication with volunteers and companies through online tools.<br />
                        <strong>Updated Information:</strong> Allows the dissemination of news, ongoing projects, success stories, and other relevant information in real-time.
                    </p>
                </div>
            </section>
            <section className={styles.audience}>
                <div className={styles.textBlock}>
                    <h2 className={styles.sectionTitle}>Who Is Our Target Audience?</h2>
                    <p className={styles.sectionText}>
                        <strong>Large Companies:</strong> Organizations seeking to recruit volunteers for social projects, often internationally.<br />
                        <strong>Volunteers:</strong> Individuals interested in participating in social causes and willing to work in different locations, including other countries.<br />
                        <strong>NGOs and Charities:</strong> Entities that need volunteers for their actions and projects.<br />
                        <strong>Stakeholders:</strong> Investors and partners interested in supporting impactful social initiatives.
                    </p>
                </div>
                <div className={styles.imageBlock}>
                    <img src="imagens/voluntariado2.jpg" alt="Target Audience" className={styles.audienceImage}/>
                </div>
            </section>
        </div>
    );
}