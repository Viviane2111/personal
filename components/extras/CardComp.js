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
  return (
    <div>
      {/* <div style={styles.card}> */}
      {/* <div style={styles.textContent}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
      <div style={styles.imageBox}>
        <Image
          style={styles.image}
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div> */}
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

const styles = {
  card: {
    border: "1px solid #fff7dd",
    background: "#fff7dd",
    display: "flex",
    flexDirection: "row",
    margin: "10px 0 10px 0",
    borderRadius: "12px",
    boxShadow: "#666 5px 5px 0px",
    cursor: "pointer",
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
  description: {},
  imageBox: {
    margin: "10px",
    border: "3px solid #005BCD",
    borderRadius: "12px",

  },
  image: {
    borderRadius: "8px",
  },
};

export default CardComp;
