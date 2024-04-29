import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useState } from "react";

function Header() {
  // contrôle du menu burger
   const [openMenu, setOpenMenu] = useState(false);
   const handdleOpenMenu = () => {
      setOpenMenu(!openMenu);
   };
   // contrôle su scroll vers une section
   const scrollToSection = (e, id) => {
     e.preventDefault();
     const element = document.getElementById(id);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
       setOpenMenu(false);
     }
   };
   
  return (
    <nav className={`${styles.navbar} ${openMenu ? styles.showMenu : ""}`}>
      <div className={styles.navbarLogo}>
        <Image
          src="/funnyCat.png"
          alt="cat logo"
          width={78}
          height={58}
        />
      </div>
      <ul className={styles.navbarLinks}>
        <li className={[styles.navbarItem, styles.slideInDown1].join(" ")}>
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className={styles.navbar__link}
          >
            Accueil
          </a>
        </li>
        <li className={[styles.navbarItem, styles.slideInDown2].join(" ")}>
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, "portfolio")}
            className={styles.navbar__link}
          >
            Réalisation
          </a>
        </li>
        <li className={[styles.navbarItem, styles.slideInDown3].join(" ")}>
          <a
            href="#school"
            onClick={(e) => scrollToSection(e, "school")}
            className={styles.navbar__link}
          >
            Formation
          </a>
        </li>
        <li className={[styles.navbarItem, styles.slideInDown4].join(" ")}>
          <a
            href="#experience"
            onClick={(e) => scrollToSection(e, "experience")}
            className={styles.navbar__link}
          >
            Expériences
          </a>
        </li>
        <li className={[styles.navbarItem, styles.slideInDown5].join(" ")}>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "hobbies")}
            className={styles.navbar__link}
          >
            Contact
          </a>
        </li>
      </ul>
      <button className={styles.navbar__burger} onClick={handdleOpenMenu}>
        <span className={styles.burgerBar} aria-label="bouton berger qui affiche le menu"></span>
      </button>
    </nav>
  );
}
export default Header;
