import React from "react";
import img from "./logo-default.png";
import { useState } from "react";
import axios from "axios";
const styles = {
  container: {
    display: "flex",
    justifyContent: "end",
    paddingRight: "40px",
  },
  button1: {
    color: "#02B589",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 3,
    textTransform: "uppercase",
    paddingRight: "40px",
    border: "none",
    backgroundColor: "white",
  },
  button2: {
    marginTop: "10px",
    width: 183,
    height: 44,
    borderRadius: "20px 20px 20px 20px",
    backgroundColor: "#02B589",
    border: "none",
  },
  letter: {
    color: "white",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontSize: 20,
    textTransform: "uppercase",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "230px",
  },
  logo: {
    width: 184,
    height: 118,
  },
  search: {
    width: 581,
    height: 44,
    borderRadius: "20px 20px 20px 20px",
  },
  holder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button3: {
    width: 192,
    height: 44,
    color: "white",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontSize: 20,
    textTransform: "uppercase",
    backgroundColor: "#02B589",
    borderRadius: "20px 20px 20px 20px",
    marginLeft: "20px",
    border: "none",
  },
  footer: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    height: "35vh",
  },
  id: {
    display: "block",
  },
  did: {
    color: "grey",
    paddingLeft: "40px",
  },
  url: {
    display: "flex",
    gap: "150px",
    marginLeft: "10vw",
  },
  result: {
    marginLeft: "10vw",
  },
  line: {
    width: "30vw",
    height: "1px",
    backgroundColor: "grey",
    marginLeft: "10vw",
    marginBottom: "50px",
  },
  button4: {
    border: "none",
    backgroundColor: "white",
    color: "green",
    textDecoration: "underline",
    paddingBottom: "50px",
  },
  hyzgaar: {
    width: "500px",
    height: "auto",
    overflow: "wrap",
  },
};
const Home = () => {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState([]);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const copy =  () => {
    if(!message==""){
      axios
      .post("http://localhost:8000/comment/", {
        original: message
      })
      .then((res) => {
        console.log(res.data)
        const damn = res.data.data;
          setUpdated((current) => [
            ...current,
            { origin: message, short: `http://localhost:8000/comment/${damn}` },
          ]);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
  };
  const Done = ({ link, short }) => {
    return (
      <div>
        <div style={styles.url}>
          <div>
            <div>Өгөгдсөн холбоос:</div>
            <div style={styles.hyzgaar}> {link}</div>
          </div>
          <div>
            <div>Богино холбоос:</div>
            <div>{short}</div>
          </div>
          <button
            style={styles.button4}
            onClick={() => {
              navigator.clipboard.writeText(short);
            }}
          >
            Хуулж авах
          </button>
        </div>
        <div style={styles.line}></div>
      </div>
    );
  };
  return (
    <div>
      <div style={styles.container}>
        <button style={styles.button1}> Хэрхэн ажилладаж вэ?</button>
        <button style={styles.button2}>
          <div style={styles.letter}>Нэвтрэх</div>
        </button>
      </div>
      <div style={styles.main}>
        <img src={img} style={styles.logo}></img>
      </div>
      <div style={styles.holder}>
        <input
          id="message"
          onChange={handleChange}
          style={styles.search}
          placeholder="https://www.web-huudas.mn"
        ></input>
        <button onClick={copy} style={styles.button3}>
          Богиносгох
        </button>
      </div>
      <div style={styles.result}>
        {updated &&
          updated.slice(0).reverse().map((e, index) => {
            return <Done key={index} link={e.origin} short={e.short} />;
          })}
      </div>
      <div style={styles.footer}>
        <div style={styles.id}>
          <div>Made with ♥️ by Nest Academy</div>
          <div style={styles.did}>©boginoo.io 2020</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
