import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../public/logo.png";
import Usericon from "../public/circle-user.svg";
import Carticon from "../public/shopping-cart-add.svg";
import Locationicon from "../public/location.png"

import Shopaddress from "./components/shopaddress/Shopaddress";
import Homepage from "./page/homepage/Homepage";
import Signinpage from "./page/signinpage/Signinpage";
import Menu from "./page/Menu/menu.jsx"

import Shoplocation from "../src/api/shoplocation.json"
import Footer from "./components/Footer/Footer.jsx"

function App() {

  const [userIcon, setUserIcon] = useState("hideMenu");
  const location = useLocation().pathname


  const showMenuUser = () => {
    if (userIcon == "hideMenu") {
      setUserIcon("showMenu");
    } else {
      setUserIcon("hideMenu");
    }
  };


  return (
    <div className="container">
      <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src={Logo}
            alt="this logo"
            style={{ width: "50px", height: "50px" }}
          />
          <h1>Coffe shop</h1>
        </div>
        <div className="navigation">
          <Link to="/" element={<Homepage/>} >Trang chủ</Link>
          <p onClick={() => {window.scrollTo({top: 10, behavior: "smooth"});}}>Cà phê</p>
          <Link to="/menu" >Thực đơn</Link>
          <p onClick={() => {window.scrollTo({top: 500, behavior: "smooth"});}}>Về chúng tối</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span><img src={Locationicon} alt="locationicon" /><Link to="/location-store" element={<Shopaddress/>}>Tìm cửa hàng</Link></span>
          <div className="cart-icon" style={{ width: "30px", height: "30px" }}>
            <img
              src={Carticon}
              alt="user icon"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
            <p
              style={{
                border: "1px solid",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                fontWeight: "bold",
                fontSize: "10px",
              }}
            >
              1
            </p>
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <img
              src={Usericon}
              alt="user icon"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={showMenuUser}
            />
            <div
              className={userIcon}
              style={{
                width: "120px",
                height: "200px",
                backgroundColor: "rgb(247, 247,247, 0.4)",
                backdropFilter: "blur(20px)"
              }}
            >
              <dl>
                <dt><Link to="/">Trang chủ</Link></dt>
                <dt><Link to="/signin-page">Đăng nhập</Link></dt>
                <dt><Link to="/">Đăng xuất</Link></dt>
              </dl>
            </div>
          </div>
        </div>
      </div>   

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/location-store" element={<Shopaddress Shoplocation={Shoplocation}/>} />
        <Route path="/signin-page" element={<Signinpage/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
      <div className="Footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;
