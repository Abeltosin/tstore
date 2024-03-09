import React from "react";

const OfferCard = ({ style, icon, text, message }) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col d-flex flex-column align-self-center justify-content-center text-center rounded shadow-lg"
          style={{ background: style, width: 315, minHeight: "230px" }}
        >
          <div className='rounded-circle bg-light p-2' style={{width: 45, height: 'auto', marginLeft: '40%', marginTop: 40}}>
            {icon}
          </div>
          <br /><h4>{text}</h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
