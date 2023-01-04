import React from 'react'
import img from './logo-default.png'
const styles={
    header:{
        
        color:"#02B589",
        fontFamily: 'Ubuntu',
        fontStyle: "normal",
        fontSize: 20,
        lineHeight: 3,
        textTransform: "uppercase",
        border: "none",
        backgroundColor:"white",
        paddingRight:"40px"
    },
    back:{
        width:"100vw",
        display:"flex",
        justifyContent:"end",
    },
    image:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"60vh"
    }, egnee:{
        display: "block",
        margin:"auto",
    },
    nevter:{
        fontFamily: 'Ubuntu',
        fontStyle: "normal",
        fontSize: 32,
        textTransform: "uppercase",
        color:"#02B589",
        paddingLeft:"20px",
        paddingTop:"60px"
    },
    bar1:{
        width: 381,
        height: 44,
        borderRadius:"20px 20px 20px 20px",
        marginRight:"150px"
    }
}
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
            </div>
              
        </div>
    </div>
    
  )
}
export default login;
