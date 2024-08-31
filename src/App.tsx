import { createHashRouter, RouterProvider } from "react-router-dom";
import styles from './App.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Simulations from "./pages/Simulations";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
import { AboutIcon, AtIcon, HeartIcon, HomeIcon, SimIcon, SUFullIcon } from "./Components/Icons";

AOS.init();

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/simulations",
    element: <Simulations />
  },
  {
    path: "/about",
    element: <About />
  }
]);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // clicking something not in the menu should close the menu
  window.addEventListener("click", (e: MouseEvent) => {
    if (menuOpen && !(e.target as HTMLElement).closest("." + styles.mobileNav)) {
      setMenuOpen(false);
    }
  });
  // when the window resizes past the mobile breakpoint, close the menu
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      setMenuOpen(false);
    }
  });
  // scroll to top on navigation
  router.subscribe(() => {
    window.scrollTo(0, 0);
  });
  const MainLogo = () => {
    return (
      <div className={styles.logo} onClick={() => router.navigate("/")}>
        <span className={styles.title}>BioSims</span>
        <AtIcon width="1.25em" height="1.25em" />
        <span>SU</span>
      </div>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <MainLogo />
          <div className={styles.menu}>
            <a href="#/"><HomeIcon />Home</a>
            <a href="#/simulations"><SimIcon />Simulations</a>
            <a href="#/about"><AboutIcon />About</a>
          </div>
        </nav>
        <nav className={styles.mobileNav}>
          <MainLogo />
          <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={styles.hamburger}>
              <span className={styles.hamburgerInnerLine}></span>
            </span>
          </button>
        </nav>
        <div className={styles.mobileMenu + " " + (menuOpen ? styles.open : "")}>
          <a href="#">Home</a>
          <a href="#/simulations">Simulations</a>
          <a href="#/about">About</a>
        </div>
      </header>
      <section className={styles.content}>
        <RouterProvider router={router} />
      </section>
      <footer className={styles.footer}>
        <SUFullIcon />
        <p className={styles.footerHeartMsg}>We <HeartIcon /> open source!</p>
        <a href="https://github.com/bio-sims">Visit our GitHub</a>
      </footer>
    </>
  )
}

export default App;
