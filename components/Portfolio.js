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

        <CardComp
          title="Mymoviz"
          description="Retrouvez vos films préférés du moment. Notez, likez et retrouvez les dans votre liste."
          imageSrc="/mymoviz1.png"
          imageAlt="apperçu du projet Mymoviz - images de films"
          imageWidth={239}
          imageHeight={210}
          siteLink={"https://mymoviz-frontend-nine-topaz.vercel.app/"}
        />
        <CardComp
          title="Mymoviz"
          description="Retrouvez vos films préférés du moment. Notez, likez et retrouvez les dans votre liste."
          imageSrc="/mymoviz1.png"
          imageAlt="apperçu du projet Mymoviz - images de films"
          imageWidth={239}
          imageHeight={210}
        />
        <CardComp
          title="Mymoviz"
          description="Retrouvez vos films préférés du moment. Notez, likez et retrouvez les dans votre liste."
          imageSrc="/mymoviz1.png"
          imageAlt="apperçu du projet Mymoviz - images de films"
          imageWidth={239}
          imageHeight={210}
        />
        <CardComp
          title="Mymoviz"
          description="Retrouvez vos films préférés du moment. Notez, likez et retrouvez les dans votre liste."
          imageSrc="/mymoviz1.png"
          imageAlt="apperçu du projet Mymoviz - images de films"
          imageWidth={239}
          imageHeight={210}
        />
        <TopButtonComp background="#005BCD" color="#FFFFFF" />
      </main>
    </div>
  );
}
export default Portfolio;
