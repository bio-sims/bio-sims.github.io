import { GitHubIcon, LaunchIcon } from "./Icons";
import styles from "./SimulationCard.module.css";

interface SimulationCardProps {
  image: string;
  name: string;
  description: string;
  url: string;
  sourceURL?: string;
  leftAlignImage?: boolean;
}

export default function SimulationCard(simulation: SimulationCardProps) {
  if (simulation.leftAlignImage === undefined) {
    simulation.leftAlignImage = true;
  }

  return (
    // flex box reverse when right align
    <div className={styles.simulationCard + " " + (simulation.leftAlignImage ? styles.leftAlign : styles.rightAlign)}
         data-aos={simulation.leftAlignImage ? "fade-right" : "fade-left"}>
      <div className={styles.imageContainer}>
        <img draggable="false" src={simulation.image} alt={simulation.name + " simulation preview"} />
      </div>
      <div className={styles.textContainer}>
        <h3>{simulation.name}</h3>
        <p>{simulation.description}</p>
        <div className={styles.buttonContainer}>
          <button className="icon-button primary" onClick={() => window.open(simulation.url, "_blank")}>
            <LaunchIcon />
            Launch
          </button>
          {simulation.sourceURL &&
            <button className="icon-button secondary" onClick={() => window.open(simulation.sourceURL, "_blank")}>
              <GitHubIcon />
              Source
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export type { SimulationCardProps };
