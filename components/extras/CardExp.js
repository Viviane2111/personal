function CardExp() {
   const styles = {
     card: {
       width: "345px",
       height: "30vh",
       fontFamily: "Open sans, sans-serif",
       display: "flex",
       flexDirection: "column",
       flexWrap: "no-wrap",
       justifyContent: "space-around",
       backgroundColor: "#fff",
       borderRadius: "18px",
       border: "5px solid #FCCD2E",
       boxShadow: "#aaa 7px 6px 0px",
       margin: "10px 20px",
       padding: "0px 0px 0px 10px",
       position: "relative",
     },
   };
  return (
    <div style={styles.card}>
      <h2>Adminitration WEB</h2>
      <h2>Téléconseillère</h2>
      <h3>📅 06/2023</h3>
      <h5>Validation de commandes</h5>
      <h5>Renseignement clientèle</h5>
      <h5>Correction de bug</h5>
    </div>
  );
}
export default CardExp