import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import PageTitle from '../Components/PageTitle';

export default function Home() {
  const navigate = useNavigate();
  const handleSimulationsClick = () => { navigate('/simulations'); };
  const handleLearnMoreClick = () => { navigate('/about'); };
  return (
    <>
      <PageTitle title="BioSims @ SU | Home" />
      <div className={styles.pageContent} data-aos="fade" data-aos-once="true">
        <div className={styles.hero} data-aos="fade-up">
          <div className={styles.heroText}>
            <h2>Creating <em>engaging</em> and <em>interactive</em> learning experiences for all students</h2>
            <p>Simulations with supplemental materials to help students learn and understand complex biological concepts.</p>
            <div className={styles.heroButtons} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">
              <button onClick={handleSimulationsClick} className="primary">
                Our Simulations
              </button>
              <button onClick={handleLearnMoreClick} className="secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="img/bunny.svg" draggable="false" alt="Bunny logo" data-aos="fade-right" data-aos-delay="250" data-aos-duration="1000" data-aos-anchor-placement="center-bottom" />
          </div>
        </div>
      </div>
    </>
  );
}
