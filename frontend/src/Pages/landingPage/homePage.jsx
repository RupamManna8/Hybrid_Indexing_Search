import React, { useState } from "react";
import "../../Styles/nav.css";
import LoginPage from "../auth/login.jsx";
import { Link, Navigate, useNavigate } from "react-router-dom";



export default function HomePage() {
  const [menuActive, setMenuActive] = useState(false);
  const [scale, setScale] = useState("550px");
  const [loginAction, setLoginAction] = useState(false);
  const [loginPage, setLoginPage] = useState(0);
  const [user,setuser] = useState([]);

  const handleLogin = () => {
   setLoginPage(1);
  };

  const navigate  = useNavigate();
  
  const passingUserId = ()=>{
    if(user){
    navigate(`/buyItem?userID=${user._id}`);
    }
  }
  // const settingCart = async ()=>{
  //   if(loginAction){
  //     const cartResponse = await fetch(`http://localhost:9000/users/cart/${user._id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (cartResponse.ok) {
  //       const res = await cartResponse.json();
  //       setCart(res.map(item => ({ ...item, quantity: item.quantity || 1 })));
  //     } else {
  //       console.error("Failed to fetch updated cart:", cartResponse.statusText);
  //     }
  //   }
  // }

  return (
    <React.Fragment>
      <nav>
        <div className="logo bars">
          <div className="bar" onClick={() => setMenuActive(true)}>
            <i className="fa fa-bars"></i>
          </div>
          <h3>Electia</h3>
        </div>
        <div className={`menu ${menuActive ? "active" : ""}`}>
          <div className="close" onClick={() => setMenuActive(false)}>
            <i className="fa fa-close"></i>
          </div>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a onClick={passingUserId}>Shop</a>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
        <div className="signup-login">
          <div className="user" style={{ display: `${loginAction ? "block":"none"}` ,color:"white",textAlign:"center",marginLeft:"10px"}}>
            {user.Name}
          </div>
          <div className="loginSection" style={{ display: `${loginAction ? "none":"block"}` }}>
        
            <h3 onClick={handleLogin}>Login</h3>
          </div> 
          <div className="loginBox" style={{scale:`${loginAction ? 0 : loginPage}`}}>
            <button className="close" onClick={()=>setLoginPage(0)}>X</button>
            <LoginPage
              loginAction={loginAction}
              setLoginAction={setLoginAction}
              setUser={setuser}
            />
          </div>

          {/* <button onClick={() =>{ setScale("0px");settingCart();}}>Cart</button>
          <div
            className="cart-Box"
            style={{ transform: `translateX(${scale})` }}
          >
            <button className="closeBtn" onClick={() => setScale("550px")}>
              x
            </button>
            <AddToCart cart={cart} setCart={setCart} />
          </div> */}
        </div>
      </nav>
    </React.Fragment>
  );
}
