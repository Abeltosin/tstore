import React from "react";
import OfferCard from "./OfferCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShield } from '@fortawesome/free-solid-svg-icons'
  import { faBicycle } from '@fortawesome/free-solid-svg-icons'
  import { faWallet } from '@fortawesome/free-solid-svg-icons'
  import { faCar } from '@fortawesome/free-solid-svg-icons'
  // npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome



const Offers = () => {
  const style = {
    color1: "rgba(245, 144, 53, 0.8)",
    color2: "rgba(169, 138, 110, 0.8)",
    color3: "rgba(111, 105, 34, 0.44)",
    color4: "rgba(111, 105, 34, 0.44)",
  };

  const icon1 = <FontAwesomeIcon icon={faCar} />
  const icon2 = <FontAwesomeIcon icon={faWallet} />
  const icon3 = <FontAwesomeIcon icon={faShield} />
  const icon4 = <FontAwesomeIcon icon={faBicycle} />
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-sm-1 mt-lg-0 mt-md-3 mt-3">
          <OfferCard
            icon={icon1}
            style={style.color1}
            text="Free Shipping"
            message="Enjoy Absolute Free Shipping on All Orders!"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-sm-1 mt-lg-0 mt-md-3 mt-3">
          <OfferCard
            icon={icon2}
            style={style.color2}
            text="Smooth Payment"
            message="Seamless Payment Experience Guaranteed!"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-sm-1 mt-lg-0 mt-md-3 mt-3">
          <OfferCard
            icon={icon3}
            style={style.color3}
            text="Seure Payment"
            message="Shop Securely with Encrypted Payments!"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-sm-1 mt-lg-0 mt-md-3 mt-3">
          <OfferCard
            icon={icon4}
            style={style.color4}
            text="Return Guarentee"
            message="100% Satisfaction Guaranteed - Easy Returns!"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
