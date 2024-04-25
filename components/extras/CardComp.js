import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Image from "next/image";
import { useState } from "react";

function CardComp({
  title,
  description,
  technos,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  siteLink,
}) {
  const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  const styles = {
    container: {
      Width: "100vw",
    },
    card: {

      border: "1px solid #fff7dd",
      fontSise: "",
      background: "#fff7dd",
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      flexDirection: "row",
      margin: "10px 0 10px 0",
      borderRadius: "12px",
      boxShadow: "#010101 5px 5px 0px",
    },
    textContent: {
      width: "50vw",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
    },
    title: {
      paddingBottom: "20px",
    },
    description: {
      fontSize: "1.7vh",
    },
    technos: {
      margin: "85px 0 0",
      padding: "5px",
      width: "200px",
      textAlign: "center",
      fontSize: "1.2vh",
      border: "1px solid",
      borderRadius: "12px",
      color: "#fff",
      transition: "background 0.3s ease-in-out",
      background: isHovered ? "#005BCD" : "#005BCD88",
      position: "relative",
    },
    imageBox: {
      margin: "10px",
      borderRadius: "12px",
    },
    image: {
      borderRadius: "8px",
    },
  };

    return (
      <div className={styles.container}>
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.card}
        >
          <div style={styles.textContent}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{description}</p>
            <div
              style={styles.technos}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>{technos}</p>
            </div>
          </div>
          <div style={styles.imageBox}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              style={styles.image}
            />
          </div>
        </a>
      </div>
    );
}

export default CardComp;
