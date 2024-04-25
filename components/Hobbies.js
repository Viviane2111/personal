import styles from "../styles/Hobbies.module.css";
import TopButtonComp from "./extras/TopButtonComp";
import { useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Hobbies() {
  const [email, setEmail] = useState("");
  return (
    <div id="hobbies" className={styles.hobbies}>
      <main className={styles.main}>
        <div className={styles.footer}>
          <h1 className={styles.h1}>Contact</h1>
            <p className={styles.description}>
              Je suis actuellement développeuse freelance sur Cagne-sur-mer.{" "}
              <br />
              Contactez moi pour toute demande de site web ou d'application
              mobile.
            </p>
            <div style={{ margin: "2rem" }}>
              <a href="mailto:schommersv06@gmail.com" className={styles.button}>
                Contactez-moi
              </a>
            </div>
        </div>
        <div className={styles.btn}>
          <TopButtonComp background="#005bcd" color="#fff" icon={faChevronUp} />
        </div>
      </main>
    </div>
  );
}
export default Hobbies;
