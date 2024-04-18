import styles from "../styles/Portfolio.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import TopButtonComp from "./extras/TopButtonComp";
import CardComp from "./extras/CardComp";

function Portfolio() {

  return (
    <div id="portfolio" className={styles.portfolio}>
      <main className={styles.main}>
        <h2 className={styles.title}>Mes réalisations</h2>

        <div className={styles.card}>
          <CardComp
            title="Mymoviz"
            description="Retrouvez vos films préférés du moment. Notez, likez et retrouvez les dans votre liste."
            imageSrc="/mymoviz1.png"
            imageAlt="apperçu du projet Mymoviz - images de films"
            imageWidth={239}
            imageHeight={210}
          />
          <div className={styles.links}>
            <a
              href="https://mymoviz-frontend-nine-topaz.vercel.app/"
              target="blank"
            >
              🎬
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <CardComp
            title="QR Code generation"
            description="Créer votre QR code personnalisé."
            imageSrc="/QRCode.png"
            imageAlt="apperçu du projet Mymoviz - images de films"
            imageWidth={239}
            imageHeight={190}
          />
          <div className={styles.links}>
            <a
              href="/QRCodeGenerator/QRCode.html"
              target="blank"
              style={{ color: "#000" }}
            >
              🏾
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <CardComp
            title="QR Code generation"
            description="Trouvez le temps qu'il fait partout dans le monde."
            imageSrc="/weatherApp.png"
            imageAlt="apperçu du projet WeatherApp"
            imageWidth={239}
            imageHeight={190}
          />
          <div className={styles.links}>
            <a
              href="/firstWeatherApp/weather.html"
              target="blank"
              style={{ color: "#000", fontSize: "" }}
            >
              🌈☀️
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <CardComp
            title="Divers Projets JS"
            description="Quelques animations pour le plaisir : 
            Animation du système solaire, et un coeur qui bat ...
            "
            imageSrc="/projet2.png"
            imageAlt="image de projets d'animation"
            imageWidth={190}
            imageHeight={210}
          />
          <div className={styles.links}>
            <a
              href="https://arrghe64.github.io/Animation-earthAndHart/"
              target="blank"
            >
              🌍 ❤️
            </a>
            <a href="/analogClock/clock.html" target="blank">
              ⏳ 🕒
            </a>
          </div>
        </div>
        <TopButtonComp background="#005BCD" color="#FFFFFF" />
      </main>
    </div>
  );
}
export default Portfolio;
