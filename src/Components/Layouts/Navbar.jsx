import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [myurl, setMyurl] = useState("");
  useEffect(() => {
    setInterval(() =>{
      if (typeof window !== "undefined") {
        setMyurl(window.location.href);
      }
    },1000)
   
  });
  const translate = (lang) => {
    if (typeof window !== "undefined") {
      if (myurl.includes("?")) {
        const url = myurl.substring(0, myurl.indexOf("="));
        return url + "=" + lang;
      } else {
        return myurl + "?lng=" + lang;
      }
    }
  };


  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
        <div className="container">
          <Link to={'/'} className="navbar-brand">
            <img
              src={require("../../assets/images/medays.jpg")}
              alt="medays logo"
              id="logo-title"
            />
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mt-3 mx-auto mb-lg-0">
              <p
                className="text-white"
                style={{ fontWeight: "bold", fontSize: "16px" }}
              >
                SOUS LE HAUT PATRONAGE DE SA MAJESTÉ LE ROI MOHAMMED VI
              </p>
            </ul>

            <div className="btn">
              <a className="btn btn-outline-light ms-2" href={translate("fr")}>
                <i className="fa fa-sign-in me-1" aria-hidden="true"></i>Fr
              </a>
              <a className="btn btn-outline-light ms-2" href={translate("en")}>
                <i className="fa fa-user-plus me-1"></i>En
              </a>
              <button className="btn ms-2">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
