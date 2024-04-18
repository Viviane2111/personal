import Image from "next/image";
function CardComp({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  siteLink,
}) {
  const styles = {
    card: {
      border: "1px solid #fff7dd",
      // width: "80vw",
      fontSise: "",
      background: "#fff7dd",
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      flexDirection: "row",
      margin: "10px 0 10px 0",
      borderRadius: "12px",
      boxShadow: "#010101 5px 5px 0px",
      // cursor: "pointer",
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
    imageBox: {
      margin: "10px",
      borderRadius: "12px",
    },
    image: {
      borderRadius: "8px",
    },
  };

    return (
      <div>
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.card}
        >
          <div style={styles.textContent}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{description}</p>
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
