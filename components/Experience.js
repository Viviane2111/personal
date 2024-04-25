import styles from "../styles/Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import TopButtonComp from "./extras/TopButtonComp"; // composant bouton
import CardExp from "./extras/CardExp"; // composant card

function Experience() {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  return (
    <div id="experience" className={styles.experience}>
      <main className={styles.main}>
        <h1 className={styles.h1}>Mes experiences</h1>
        <div className={styles.lines}>
          <ul className={styles.timeline}>
            <li>
              <div className={styles.timelineBadge1}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#666", fontSize: "24px" }}
                />
              </div>
              <div className={styles.cardContent1}>
                <div className={styles.div}></div>
                <div className={styles.cardBox1}>
                  <CardExp
                    title="Administratio WEB"
                    subTitle="Téléconseille"
                    date="06/2023"
                    description1="Valisation de commandes"
                    description2="Renseignement clientèle"
                    description3="Correction de bug"
                    backgroundColor="#fff"
                    borderColor="#FFF"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className={styles.timelineBadge}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#666", fontSize: "24px" }}
                />
              </div>
              <div className={styles.cardContent2}>
                <div className={styles.cardBox2}>
                  <CardExp
                    title="Stationnement"
                    subTitle="Agent d'exploitation qualifiée"
                    date="2007-2022"
                    description1="Maintenance et exploitation horodateurs Cagnes"
                    description2="Gestion des abonnements et accueil clientèle"
                    description3="Régisseur adjointe voirie de Vence"
                    backgroundColor="#FCCD2E"
                    borderColor="#FCCD2E"
                  />
                </div>
                <div className={styles.div}></div>
              </div>
            </li>
            <li>
              <div className={styles.timelineBadge1}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#666", fontSize: "24px" }}
                />
              </div>
              <div className={styles.cardContent1}>
                <div className={styles.div}></div>
                <div className={styles.cardBox1}>
                  <CardExp
                    title="Nettoyage"
                    subTitle="Artisan en nom propre"
                    date="2004-2013"
                    description1="Travaux de nettoyages acrobatiques"
                    description2="Traitement grandes surfaces"
                    description3="Ponçage, vitrification de marbre"
                    backgroundColor="#fff"
                    borderColor="#FFF"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className={styles.timelineBadge}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#666", fontSize: "24px" }}
                />
              </div>
              <div className={styles.cardContent2}>
                <div className={styles.cardBox2}>
                  <CardExp
                    title="Education"
                    subTitle="Intervenante périscolaire Chef d'équipe animation"
                    date="1992 - 2001"
                    description1="Mobilisation de l'enfant, suivi scolaire, médiation"
                    description2="Activités culturelles, artistiques et sportives"
                    description3=""
                    backgroundColor="#FCCD2E"
                    borderColor="#FCCD2E"
                  />
                </div>
                <div className={styles.div}></div>
              </div>
            </li>
          </ul>
        </div>

        <div></div>
        <div>
          <TopButtonComp
            background="#FCCD2E"
            color="#010101"
            icon={faChevronUp}
          />
        </div>
      </main>
    </div>
  );
}
export default Experience;
