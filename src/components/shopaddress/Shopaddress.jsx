import React from "react";
import "./Shopaddress.css";
import Map from "../map/Map";

import shoplocation from "../../api/shoplocation.json";
import showmore from "../../../public/angle-small-down.svg";

const Shopaddress = ({ Shoplocation }) => {
  const showMore = (e) => {
    const show = document.getElementById(e.target.alt);
    if (show.style.display === "block") {
      show.style.display = "none";
    } else {
      show.style.display = "block";
    }
  };

  return (
    <div className="locationpage">
      <div className="location-list">
        {shoplocation.map((element) => (
          <div className="location" key={element.id}>
            <div className="title">
              <p style={{ fontWeight: "bold" }}>{element.name}</p>
              <p style={{ fontSize: "12px", fontStyle: "italic" }}>
                {element.open}
              </p>
            </div>
            <img
              src={showmore}
              alt={element.id}
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "flex-end",
              }}
              onClick={showMore}
            />
            <div className="hide" id={element.id}>
              <p>Add: {element.address}</p>
              <p>Tel: {element.tel}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="map">
        <Map Shoplocation={Shoplocation} />
      </div>
    </div>
  );
};

export default Shopaddress;
