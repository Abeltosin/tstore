import React from "react";

const SliderCard = ({ title, desc, cover }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{}}>
          <h3
            className="title"
            style={{
              fontSize: 40,
            }}
          >
            {title}
          </h3>
          <p>{desc}</p>
          <button className=" border-primary bg-primary rounded-pill text-light p-2">
            Visit Collection
          </button>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center">
          <img
            className="img adjus"
            style={{ width: 400, height: 250 }}
            src={cover}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
