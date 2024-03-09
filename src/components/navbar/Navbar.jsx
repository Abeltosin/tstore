// import './navbar.css'
import { Link } from "react-router-dom";
import { useState } from "react";
// import Home from '../pages/Home'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cartAtom } from "../recoil/atom/cartAtom";
import { useRecoilValue } from "recoil";


const Navbar = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const handleClick = () => {
    setChangeIcon((prevState) => !prevState);
  };

  const value = useRecoilValue(cartAtom)
  const quant = value.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link to="/Home" className="navbar-brand" href="#">
            T-STORE
          </Link>
          <div className="">
          <div style={{position: 'relative'}}>
          <FontAwesomeIcon style={{zIndex: 1}} icon={faCartShopping} />
         <div className="" style={{borderRadius: '50%', position: 'absolute', zIndex: 1000, top: -10, right: 20, color: 'red'}}>{quant}</div>
          <button
            className="navbar-toggler border-0 pe-3"
            style={{ outline: "none", boxShadow: "none", width: 1 }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            {/* <span className="navbar-toggler-icon" style={{width: 5}}></span> */}
            {changeIcon === false ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faClose} />
            )}
          </button>
         </div>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <div className="d-flex justify-content-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Shop" className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Cart" className="nav-link">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
