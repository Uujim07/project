import React from "react";
import img from "./logo-default.png";
const styles = {
  header: {
    color: "#02B589",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 3,
    textTransform: "uppercase",
    border: "none",
    backgroundColor: "white",
    paddingRight: "40px",
  },
  back: {
    width: "100vw",
    display: "flex",
    justifyContent: "end",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  },
  egnee: {
    display: "block",
    margin: "auto",
  },
  nevter: {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontSize: 32,
    textTransform: "uppercase",
    color: "#02B589",
    paddingLeft: "20px",
    paddingTop: "60px",
    paddingBottom: "50px",
  },
  bar1: {
    width: 381,
    height: 44,
    borderRadius: "20px 20px 20px 20px",
    marginRight: "150px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  line: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "150px",
  },
  button2: {
    backgroundColor: "white",
    border: "none",
    textDecoration: "underline",
  },
  nevtreh: {
    width: "383px",
    height: "43px",
    backgroundColor: "#02B589",
    borderRadius: "20px 20px 20px 20px",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontSize: 20,
    textTransform: "uppercase",
    color: "white",
    marginTop: "80px",
    display: "block",
  },
  nevtreh2: {
    border: "none",
    backgroundColor: "white",
    marginLeft: "80px",
    color: "#02B589",
    textDecoration: "underline",
  },
  footer: {
    marginLeft: "80px",
  },
  did: {
    paddingTop: "30px",
    display: "block",
  },
};
const login = () => {
  return (
    <div>
      <div style={styles.back}>
        <button style={styles.header}>Хэрхэн ажилладаж вэ?</button>
      </div>
      <div style={styles.image}>
        <div style={styles.egnee}>
          <img src={img}></img>
          <div style={styles.nevter}>Нэвтрэх</div>
          <div>
            <div>Цахим хаяг</div>
            <input style={styles.bar1} placeholder="name@mail.domain"></input>
          </div>
          <div>
            <div>Нууц үг</div>
            <input style={styles.bar1} placeholder="••••••••••"></input>
          </div>
          <div style={styles.line}>
            <div>
              <input type="checkbox"></input>
              <label>Намайг сана</label>
            </div>
            <button style={styles.button2}>Нууц үгээ мартсан</button>
          </div>
          <button style={styles.nevtreh}>Нэвтрэх</button>
          <button style={styles.nevtreh2}>
            Шинэ хэрэглэгч бол энд дарна уу?
          </button>
          <div style={styles.footer}>
            <div style={styles.did}>
              <div>Made with ♥️ by Nest Academy</div>
              <div>©boginoo.io 2020</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default login;
