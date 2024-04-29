import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function TopButtonComp({background, color, icon}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
    transition: "transform 0.25s ease-in-out",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  return (
    <div
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" onClick={(e) => scrollToSection(e, "hero")} aria-label="Aller tout en haut">
        <FontAwesomeIcon
          icon={icon}
          style={{ color: color, fontSize: "24px" }}
        />
      </a>
    </div>
  );
}

export default TopButtonComp;
