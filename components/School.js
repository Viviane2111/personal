import styles from "../styles/School.module.css";
import CardStudie from "./extras/CardStudie";
import TopButtonComp from "./extras/TopButtonComp";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function School() {
  return (
    <div id="school" className={styles.school}>
      <main className={styles.main}>
        <h1 className={styles.title}>Mes formations</h1>
        <div className={styles.cards}>
          <CardStudie
            date="1994 - 1999"
            title="Faculté de Géographie"
            description="DEUG de Géographie"
            subtitle="Option aménagement du territoire"
            skill1="préparation Maitrise"
            skill2="Organisation de l'espace"
            skill3="Aménagement du Territoire"
          />
          <CardStudie
            date="2024"
            title="Bootcamp La Capsule"
            description="RNCP 6 - DEV FULL STACK"
            subtitle="Concepteur-développeur web & mobile"
            skill1="Conception - maquettage"
            skill2="Persistance des données"
            skill3="Mise en production"
          />
          <CardStudie
            date="2016"
            title="Centre formation AFPA"
            description="Titre professionnel CDI"
            subtitle="Concepteur Développeur Informatique"
            skill1="Analyse - gestion de proget"
            skill2="Persistance des données"
            skill3="Applications - Web"
          />
        </div>
        <div className={styles.button}>
          <TopButtonComp
            background="#F22B30"
            color="#FFFFFF"
            icon={faChevronUp}
          />
        </div>
      </main>
    </div>
  );
}
export default School;
