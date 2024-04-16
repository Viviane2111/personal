import styles from "../styles/Experience.module.css";
import { Timeline } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import TopButtonComp from "./extras/TopButtonComp";
import CardExp from "./extras/CardExp";

function Experience() {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  return (
    <div id="experience" className={styles.experience}>
      <main className={styles.main}>
        <h1>Mes experiences</h1>

        <div className={styles.lines}>
          <ul className={styles.timeline}>
            <li>
              <div className={styles.timelineBadge}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#666", fontSize: "24px" }}
                />
              </div>
              <div className={styles.cardContent1}>
                <div className={styles.div}></div>
                <div className={styles.cardBox1}>
                  <CardExp />
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
                  <CardExp />
                </div>
                <div className={styles.div}></div>
              </div>
            </li>
            <li>
              <div className={styles.timelineBadge}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ color: "#666", fontSize: "24px" }}
                />
              </div>
              <div className={styles.cardContent1}>
                <div className={styles.div}></div>
                <div className={styles.cardBox1}>
                  <CardExp />
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
                  <CardExp />
                </div>
                <div className={styles.div}></div>
              </div>
            </li>
          </ul>
        </div>

        <div></div>
        <div>
          <TopButtonComp background="#FCCD2E" color="#010101" />
        </div>
      </main>
    </div>
  );
}
export default Experience;
