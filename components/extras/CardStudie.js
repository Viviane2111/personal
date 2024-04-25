import { useState } from "react";

function CardStudie({
  date,
  title,
  description,
  subtitle,
  skill1,
  skill2,
  skill3,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // animation de la petite ligne
  const keyframes = `
    @keyframes animate {
      from {
        left: 0%;
      }
      to {
        left: 100%;
      }
    }
  `;

  const styles = {
    card: {
      width: "345px",
      height: "60vh",
      fontFamily: "Open sans, sans-serif",
      display: "flex",
      flexDirection: "column",
      flexWrap: "no-wrap",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#fff",
      borderRadius: "18px",
      boxShadow: "#aaa 7px 6px 0px",
      boxShadow: "#010101 9px 9px 0px",
      margin: "0 20px",
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out",
      transform: isHovered ? "translateY(-10px)" : "translateY(0)",
      position: "relative",
    },
    heading: {
      margin: "30px 0 20px 0",
      fontSize: "2.5vh",
      fontWeight: "bold",
      color: "#333",
    },
    icon: {
      fontSize: "3vh",
      marginBottom: "20px",
    },
    title: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      color: "#F22B30",
      fontWeight: "900",
      fontSize: "2vh",
      marginBottom: "10px",
    },
    description: {
      fontSize: "2.2vh",
      margin: "30px 0 30px 0",
      color: "#010101",
      fontWeight: "900",
    },
    subTitle: {
      fontSize: "1.65vh",
      color: "#666",
      marginBottom: "30px",
      fontStyle: "italic",
    },
    line: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "4px",
      borderRadius: "5px",
      background: "#F22B30",
      margin: "0px 0 30px 0",
    },
    lineAfter: {
      content: "",
      position: "absolute",
      width: "5px",
      height: "4px",
      animation: "animate 3s linear infinite",
      borderLeft: "4px solid #fff",
    },
    paragraph: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      fontSize: "2vh",
      marginBottom: "30px",
      lineHeight: "1.9",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 style={styles.heading}>{date}</h2>
      <span style={styles.icon}>🎓</span>
      <div style={styles.title}>
        <h2>{title}</h2>
        <h2>NICE</h2>
      </div>
      <h3 style={styles.description}>{description}</h3>
      <h4 style={styles.subTitle}>{subtitle}</h4>
      <div style={styles.line}>
        <div style={styles.lineAfter}></div>
        <style>{keyframes}</style>
      </div>
      <div style={styles.paragraph}>
        <p>{skill1}</p>
        <p>{skill2}</p>
        <p>{skill3}</p>
      </div>
    </div>
  );
}

export default CardStudie;
