function CardExp({
  title,
  subTitle,
  date,
  description1,
  description2,
  description3,
  backgroundColor,
  borderColor,
}) {
  const styles = {
    card: {
      width: "345px",
      height: "30vh",
      fontFamily: "Open sans, sans-serif",
      display: "flex",
      flexDirection: "column",
      flexWrap: "no-wrap",
      justifyContent: "space-around",
      backgroundColor: backgroundColor,
      borderRadius: "18px",
      border: "5px solid",
      borderColor: borderColor,
      boxShadow: "#010101 7px 6px 0px",
      margin: "10px 20px",
      padding: "0px 0px 0px 10px",
      // position: "absolute",
    },
    h2: {
      color: "#F22B30",
    },
  };

  // Vérifier si window est défini avant d'utiliser matchMedia
  if (typeof window !== "undefined") {
    if (window.matchMedia("(max-width: 768px)").matches) {
      styles.card.width = "70vw";
      styles.card.height = "auto";
      styles.card.margin = "10px 0";
      styles.card.padding = "10px";
    }
    if (window.matchMedia("(max-width: 576px)").matches) {
      styles.card.width = "100%";
      styles.card.height = "auto";
      styles.card.margin = "10px 0px";
      styles.card.padding = "10px 50px";
    }
  }
  return (
    <div style={styles.card}>
      <h2>{title}</h2>
      <h2 style={styles.h2}>{subTitle}</h2>
      <h3>📅 {date}</h3>
      <h5>{description1}</h5>
      <h5>{description2}</h5>
      <h5>{description3}</h5>
    </div>
  );
}
export default CardExp