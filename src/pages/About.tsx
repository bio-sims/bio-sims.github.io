import PageTitle from '../Components/PageTitle';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <PageTitle title="About | BioSims @ SU" />
      <div className={styles.pageContent}>
        <div className={styles.hero} data-aos="fade" data-aos-duration="500" data-aos-once="true">
          <div className={styles.heroText}>
            <h2>About Us</h2>
          </div>
        </div>
        <div className={styles.aboutContent} data-aos="fade-up" data-aos-duration="500" data-aos-delay="250" data-aos-once="true">
          <div className={styles.aboutText}>
            <h3>Our Team</h3>
            <p>BioSims @ SU is a collection of interactive simulations made by students with research and guidance from faculty at Seattle University. Our goal is to create learning experiences for a wide range of students, regardless of their background or prior knowledge, and validate the effectiveness of these simulations through research.</p>
            <h3>Contributors</h3>
            <p>Our team is composed of students and professors from multiple cohorts and disciplines, primarily from the College of Science and Engineering.</p>
            <h4>Seattle University Biology Department</h4>
            <ul>
              <li>Dr. Robert Rutherford</li>
              <li>Sam Nouwens</li>
              <li>Margaret Fitzgibbon</li>
            </ul>
            <h4>Seattle University Computer Science Department</h4>
            <ul>
              <li>Dr. Nate Kremer-Herman</li>
              <li>Zachary Mullen</li>
              <li>Rena Ahn</li>
              <li>Gina Philipose</li>
              <li>Anna Muller</li>
            </ul>
            <h4>Special Thanks</h4>
            <p>The following are former undergraduate students who have contributed to past simulations that influenced some of the current simulations.</p>
            <ul>
              <li>Richard Charczenko</li>
              <li>Sam Levy</li>
              <li>Jeremy Bjelajac</li>
              <li>Nicolas Garcia</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};
