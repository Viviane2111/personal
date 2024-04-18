import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment/locale/fr";

function Hero() {
  const [date, setDate] = useState("2050-11-22T23:59:59");
  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div id="hero" className={styles.hero}>
      <main className={styles.main}>
        <div className={styles.date}>
          <Moment date={date} format="D MMM YYYY" locale="fr" />
        </div>
        <div className={styles.page}>
          <div className={styles.heroImage}>
            <Image
              className={styles.image}
              src="/moi3.png"
              alt="Image de Viviane"
              width={240}
              height={236}
            />
          </div>

          <div className={styles.container}>
            <div>
              <Image
                className={styles.hi}
                src="/hi2.gif"
                alt="gif animé qui fait coucou"
                width={60}
                height={60}
              />
            </div>
            <h1 className={styles.title}>Hello, je suis Viviane SCHOMMERS</h1>
            <p className={styles.description}>
              Développeuse web & mobile full stack. En reconversion, mon
              expérience professionnelle est à votre service.
            </p>
          </div>
        </div>
        <div style={{ margin: "2rem" }}>
          <a href="/CV-revu7.pdf" className={styles.button}>
            Voir mon CV
          </a>
        </div>
      </main>
    </div>
  );
}
export default Hero;
