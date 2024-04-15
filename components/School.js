import styles from "../styles/School.module.css";
import TopButtonComp from "./extras/TopButtonComp";

function School() {
  return (
    <div>
      <div id="school" className={styles.school}>
        <main className={styles.main}>
          <h1>Mes formations</h1>
          <TopButtonComp />
        </main>
      </div>
    </div>
  );
}
export default School;
