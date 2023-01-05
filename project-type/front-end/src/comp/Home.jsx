import React from "react";
import img from "./logo-default.png";
import { useState, useEffect } from "react";
import axios from "axios"
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
    display: "block",
    marginLeft: "350px",
    height: "10vh",
  },
  result:{
    marginLeft:"300px"
  }
};
const Home = () => {
    
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState([]);
//   useEffect(() => {
//         axios.post("http://localhost:8000/user/",{
//             original: message
//         })
//         .then(res => {
//             console.log(res.data);
//           })
//           .catch(err => {
//             console.log(err.message);
//           });

//         setMessage("")
//   }, [message]);
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };
  const copy = () => {
    axios.post("http://localhost:8000/user/",{
            original: message
        })
        .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err.message);
          });

        setMessage("")
    if (!message==""){
        setUpdated((current) => [...current, message]);
        console.log(updated);
    }
    
  };
  const Done = ({link}) => {
    
        return (
            <div style={styles.url}>
              <div>Өгөгдсөн холбоос:</div>
              <div>message: {link}</div>
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
        updated.map((e, index) => {
          return <Done key={index} link={e} />;
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
