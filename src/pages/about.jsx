// import styles from '../styles/about.module.css'; 
// export default function About() {
//     return (
//         <div className={styles.main}>
//             <section className={styles.introduction}>
//                 <div className={styles.textBlock}>
//                     <h2 className={styles.sectionTitle}>Our Identity</h2>
//                     <p className={styles.sectionText}>
//                         We are a company specialized in the recruitment and management of volunteers for major social causes. We act as a bridge between large companies that need dedicated workforce for social projects and volunteers willing to make a difference in various parts of the world. Our mission is to facilitate the mobilization of human resources for important causes, promoting positive global impact.
//                     </p>
//                 </div>
//                 <div className={styles.imageBlock}>
//                     <img src="imagens/time.jpg" alt="Our Team" className={styles.teamImage}/>
//                 </div>
//             </section>
//             <section className={styles.importance}>
//                 <div className={styles.imageBlock}>
//                     <img src="imagens/voluntariado1.jpeg" alt="Importance of Website" className={styles.importanceImage}/>
//                 </div>
//                 <div className={styles.textBlock}>
//                     <h2 className={styles.sectionTitle}>Why Do I Need a Website?</h2>
//                     <p className={styles.sectionText}>
//                         <strong>Visibility:</strong> A website increases your company's visibility, allowing businesses and volunteers to easily find information about the services offered.<br />
//                         <strong>Ease of Access:</strong> Provides a platform where stakeholders can sign up and get detailed information.<br />
//                         <strong>Efficient Management:</strong> Facilitates the management of registrations, selection processes, and communication with volunteers and companies through online tools.<br />
//                         <strong>Updated Information:</strong> Allows the dissemination of news, ongoing projects, success stories, and other relevant information in real-time.
//                     </p>
//                 </div>
//             </section>
//             <section className={styles.audience}>
//                 <div className={styles.textBlock}>
//                     <h2 className={styles.sectionTitle}>Who Is Our Target Audience?</h2>
//                     <p className={styles.sectionText}>
//                         <strong>Large Companies:</strong> Organizations seeking to recruit volunteers for social projects, often internationally.<br />
//                         <strong>Volunteers:</strong> Individuals interested in participating in social causes and willing to work in different locations, including other countries.<br />
//                         <strong>NGOs and Charities:</strong> Entities that need volunteers for their actions and projects.<br />
//                         <strong>Stakeholders:</strong> Investors and partners interested in supporting impactful social initiatives.
//                     </p>
//                 </div>
//                 <div className={styles.imageBlock}>
//                     <img src="imagens/voluntariado2.jpg" alt="Target Audience" className={styles.audienceImage}/>
//                 </div>
//             </section>
//         </div>
//     );
// }

import styles from '../styles/about.module.css';
export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.firstsectioncolor}>
                <section className={styles.introduction}>

                    <div className={styles.textBlock}>
                        <h2 className={styles.sectionTitle1}>Our Identity</h2>
                        <p className={styles.sectionText1}>
                            We are a company specialized in the <b>recruitment and management</b> of volunteers for major social causes. We act as a <b>bridge between large companies</b> that need dedicated workforce for social projects <b>and volunteers</b> willing to make a difference in various parts of the world. Our mission is to <b>facilitate the mobilization</b> of human resources for important causes, promoting positive global impact.
                        </p>
                    </div>
                    <div className={styles.imageBlock}>
                        <img className={styles.teamImage1} src="imagens/fotolightbox4.png" alt="Our Team" />
                    </div>

                </section >
            </div>

            <div className={styles.secondsectioncolor}>
                <section className={styles.importance}>
                    <div className={styles.imageBlock}>
                        <img src="imagens/imagemabout2.jpg" alt="Importance of Website" className={styles.importanceImage} />
                    </div>
                    <div className={styles.textBlock}>
                        <h2 className={styles.sectionTitle}>What sets us apart?</h2>
                        <p className={styles.sectionText}>
                            What differentiates us is our <b>specialized focus</b> on connecting <b>large companies</b> with <b>volunteers</b> dedicated to impactful social projects. Our expertise ensures that we effectively <b>recruit and manage volunteers</b> who are passionate about making a difference globally. This results in <b>more successful and meaningful projects.</b></p>

                        <p className={styles.sectionText}>Our <b>comprehensive platform stands out</b> by providing an efficient and <b>user-friendly experience for both </b>companies and volunteers. It <b>streamlines the entire process</b>, from registration and selection to ongoing communication, utilizing advanced online tools that enhance <b>coordination and productivity</b>.</p>

                        <p className={styles.sectionText}>Furthermore, our commitment to <b>real-time updates</b> allows us to keep volunteers engaged with the <b> latest news</b>, <b>project progress</b>, and <b>success stories</b>. This <b>transparency</b> and continuous engagement foster a strong, informed <b>community</b> united by a shared goal of promoting <b>positive global change</b>. Our <b>tailored approach and dedication to excellence</b> set us apart in the field of volunteer management for social causes.</p>
                    </div>
                </section>
            </div>


            <div className={styles.thirdsectioncolor}>
                <section className={styles.audience}>
                    <div className={styles.textBlock}>
                        <h2 className={styles.sectionTitle}>Our Commitment to Quality and Support</h2>
                        <p className={styles.sectionText}>
                            Our commitment to <b>quality</b> and <b>support</b> further differentiates us in the field of volunteer management for social causes. We prioritize a <b>high standard of service</b> by ensuring that both volunteers and companies receive the <b>support they need</b> throughout the duration of their projects. This includes providing <b>thorough orientation</b> and <b>training</b> for volunteers, ensuring they are <b>well-prepared</b> and <b>confident in their roles</b>.</p>

                        <p className={styles.sectionText}>We also offer <b>continuous support</b> and <b>resources</b>, addressing any challenges that arise and ensuring that projects run smoothly. Our <b>dedicated support team</b> is always available to assist with any issues, providing <b>timely and effective solutions</b> to maintain the momentum and success of each initiative.</p>

                        <p className={styles.sectionText}>By maintaining <b>rigorous quality standards</b> and offering <b>unwavering support</b>, we enhance the <b>impact</b> and <b>sustainability</b> of social projects, ensuring that they achieve their <b>intended goals</b> and make a <b>lasting difference</b>.
                        </p>
                    </div>
                    <div>
                        <img className={styles.teamImage2} src="imagens/voluntariado2.jpg" alt="Target Audience" />
                    </div>
                </section>
            </div >
        </div>
         );
        }