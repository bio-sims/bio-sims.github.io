import PageTitle from '../Components/PageTitle';
import SimulationCard, { SimulationCardProps } from '../Components/SimulationCard';
import styles from './Simulations.module.css';

export default function Simulations() {
  const simulations: SimulationCardProps[] = [
    {
      name: "Evo",
      description: "Short for evolution, Evo is designed to help students understand population genetics and how underlying forces as natural selection and climate stability play a role in varying populations. The snowshoe hare and its changing coat color is the focus of this simulation.",
      image: "/img/evo_demo.webp",
      url: "https://bio-sims.github.io/evo/",
      sourceURL: "https://github.com/bio-sims/evo",
    },
    {
      name: "Brake the Outbreak",
      description: "An epidemiology simulation with a focus on how vaccines and social distancing rates effect the spread of a disease. This simulation is designed to help students understand the importance of public health measures in controlling the spread of infectious diseases.",
      image: "/img/brake_demo.webp",
      url: "https://bio-sims.github.io/brake-the-outbreak/",
      sourceURL: "https://github.com/bio-sims/brake-the-outbreak",
    },
    {
      name: "LacOp",
      description: "In E. coli, the lactose operon is responsible for the metabolism of lactose. This simulation allows students to explore the effects of different mutations on the operon in relation to the concentrations of different sugars inside and outside the cell.",
      image: "/img/lacop_demo.webp",
      url: "https://bio-sims.github.io/lacop/",
      sourceURL: "https://github.com/bio-sims/lacop",
    },
    {
      name: "Kirby-Bauer — AST",
      description: "A lab simulation of the Kirby-Bauer Antibiotic Sensitivity Test, mirroring what students would do in a physical microbiology lab. This simulation is designed to help students understand how antibiotics work and how bacteria can develop resistance to them.",
      image: "/img/kirby_demo.webp",
      url: "https://bio-sims.github.io/kirby-bauer/",
      sourceURL: "https://github.com/bio-sims/kirby-bauer",
    },
    {
      name: "Bacterial Growth",
      description: "Simulates the four phases of bacterial growth: lag, exponential, stationary, and death. This simulation is designed to help students understand the factors like temperature and nutrient availability that can affect bacterial growth.",
      image: "/img/growth_demo.webp",
      url: "https://bio-sims.github.io/bacterial-growth/",
      sourceURL: "https://github.com/bio-sims/bacterial-growth/",
    },
    {
      name: "FaSe",
      description: "FaSe is short for Fake Sequencer, simulating molecular evolution by mutating nucleic acid or protein sequences to a user specified percent divergence. Outputs can be used to generate phylogenetic trees or to analyze the effects of mutations on protein structure.",
      image: "/img/fase_demo.webp",
      url: "https://bio-sims.github.io/fase/",
      sourceURL: "https://github.com/bio-sims/fase",
    },
  ];

  return (
    <>
      <PageTitle title="Simulations | BioSims @ SU" />
      <div className={styles.pageContent} data-aos="fade-up">
        <div className={styles.mainContent}>
          <h1>Simulations</h1>
          <div className={styles.simulationCards}>
            {simulations.map((simulation, index) => (
              <SimulationCard key={index} {...simulation} leftAlignImage={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
