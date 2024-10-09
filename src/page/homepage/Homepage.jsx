import "./Homepage.css";


import BasicModal from "../../components/modal/BasicModal";

import latte from "../../../public/latte.jpg"
import about from "../../../public/aboutdetail.png"
import data from "../../api/data.json"

const Homepage = () => {
  return (
    <div className="homepage">
        <div className="title">
          <p style={{ fontWeight: "bold" }}>
            {data[0].title}
          </p><br />
          <p>
            {data[0].description}
          </p><br />
          <BasicModal data={data[0]}/>
        </div>
        <img src={latte} alt="latte" style={{width: "100%", height: "60vh"}}/>
        <img src={about} alt="latte" style={{width: "100%", height: "60vh"}}/>
        <div className="title">
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            {data[1].title}
          </p><br />
          <p>
          {data[1].description}
          </p><br />
          <BasicModal data={data[1]}/>
        </div>
    </div>
  );
};

export default Homepage;
