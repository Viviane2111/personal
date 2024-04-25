import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function TopButtonComp({background, color, icon}) {
  // scroll en douceur
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    background: background,
    width: "50px",
    height: "50px",
    cursor: "pointer",
    marginBottom: "10px",
    boxShadow: "#010101 4px 4px 0px",
  };

  return (
    <div style={styles}>
      <a href="#" onClick={(e) => scrollToSection(e, "hero")}>
        <FontAwesomeIcon
          icon={icon}
          style={{ color: color, fontSize: "24px" }}
        />
      </a>
    </div>
  );
}


export default TopButtonComp;
