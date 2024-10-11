import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../public/logo.png";
import Usericon from "../public/circle-user.svg";
import Carticon from "../public/shopping-cart-add.svg";
import Locationicon from "../public/location.png";
import Shopaddress from "./components/shopaddress/Shopaddress";
import Homepage from "./page/homepage/Homepage";
import Signinpage from "./page/signinpage/Signinpage";
import Menu from "./page/Menu/menu.jsx";
import CartModal from "./components/CartModal/CartModal.jsx";
import Shoplocation from "../src/api/shoplocation.json";
import Footer from "./components/Footer/Footer.jsx";
import CheckoutModal from"../src/components/CheckoutModal/CheckoutModal.jsx";

function App() {
  const [userIcon, setUserIcon] = useState("hideMenu");
  const [cartItems, setCartItems] = useState([]); 
  const location = useLocation().pathname;
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isDetailOpen, setIsDetailOpen] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const showMenuUser = () => {
    setUserIcon((prev) => (prev === "hideMenu" ? "showMenu" : "hideMenu"));
  };
  
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedOption === product.selectedOption
      );
  
      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, options: [product.selectedOption] }];
      }
    });
  };

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen); 
  };

  const handleShowDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedProduct(null);
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
          <h1>Coffee shop</h1>
        </div>
        <div className="navigation">
          <Link to="/">Trang chủ</Link>
          <p
            onClick={() => {
              window.scrollTo({ top: 10, behavior: "smooth" });
            }}
          >
            Cà phê
          </p>
          <Link to="/menu">Thực đơn</Link>
          <p
            onClick={() => {
              window.scrollTo({ top: 500, behavior: "smooth" });
            }}
          >
            Về chúng tôi
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span>
            <img src={Locationicon} alt="locationicon" />
            <Link to="/location-store">Tìm cửa hàng</Link>
          </span>
          <div
            className="cart-icon"
            onClick={toggleCartModal}
            style={{ cursor: "pointer", width: "30px", height: "30px" }}
          >
            <img
              src={Carticon}
              alt="cart icon"
              style={{ width: "30px", height: "30px" }}
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
              {cartItems.length}
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
                backgroundColor: "rgba(247, 247, 247, 0.4)",
                backdropFilter: "blur(20px)",
              }}
            >
              <dl>
                <dt>
                  <Link to="/">Trang chủ</Link>
                </dt>
                <dt>
                  <Link to="/signin-page">Đăng nhập</Link>
                </dt>
                <dt>
                  <Link to="/">Đăng xuất</Link>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/location-store"
          element={<Shopaddress Shoplocation={Shoplocation} />}
        />
        <Route path="/signin-page" element={<Signinpage />} />
        <Route path="/checkout" element={<CheckoutModal />} />
        <Route
          path="/menu"
          element={
            <Menu
              onShowDetail={handleShowDetail}
              onAddToCart={handleAddToCart}
            />
          }
        />
      </Routes>

      <div className="Footer">
        <Footer />
      </div>

      <CartModal
        open={isCartOpen}
        onClose={toggleCartModal}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
