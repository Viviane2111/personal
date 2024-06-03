import styles from "../styles/Hobbies.module.css";
import TopButtonComp from "./extras/TopButtonComp";
import { useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CardHobbie from "./extras/CardHobbie";

function Hobbies() {
  const [email, setEmail] = useState("");

  return (
    <div id="hobbies" className={styles.hobbies}>
      <main className={styles.main}>
        <div className={styles.footer}>
          <h2 className={styles.h2}>Hobbies</h2>
          <div className={styles.hobbies}>
            <CardHobbie />
          </div>
          <h2 className={[styles.h2, styles.two].join(" ")}>Contact</h2>
          <div className={styles.description}>
            <span className={styles.description}>
              Je suis actuellement développeuse freelance sur Cagne-sur-mer.
            </span>
            <span className={styles.description}>
              Contactez moi pour toutes demandes de site web ou d'application
              mobile.
            </span>
          </div>
          <div style={{ margin: "2rem" }}>
            <a href="mailto:schommersv06@gmail.com" className={styles.button}>
              Contactez-moi
            </a>
          </div>
          <div className={styles.btn}>
            <TopButtonComp
              background="#fff"
              color="#005bcd"
              icon={faChevronUp}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
export default Hobbies;
