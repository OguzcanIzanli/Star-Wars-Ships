import { useShip } from "../../context/ShipContext";
import { Link } from "react-router-dom";
import millenniumFalcon from "../../../public/images/millenniumFalcon.png";

import "./Ship.style.css";

const Ship = () => {
  const { ship } = useShip();

  return (
    <div className="selectedShipContainer">
      <Link to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <div className="selectedShipCard">
        <div className="selectedShipName">{ship.name}</div>
        <div className="selectedShipImg">
          <img src={millenniumFalcon} alt="Millennium Falcon" />
        </div>
        <div className="selectedShipInfo">
          <span>Model:</span> {ship.model}
        </div>
        <div className="selectedShipInfo">
          <span>Hyperdrive Rating:</span> {ship.hyperdrive_rating}
        </div>
        <div className="selectedShipInfo">
          <span>Max Atmosphering Speed:</span> {ship.max_atmosphering_speed}
        </div>
        <div className="selectedShipInfo">
          <span>Manufacturer:</span> {ship.manufacturer}
        </div>
        <div className="selectedShipInfo">
          <span>Crew:</span> {ship.crew}
        </div>
        <div className="selectedShipInfo">
          <span>Cargo Capacity:</span> {ship.cargo_capacity}
        </div>
      </div>
    </div>
  );
};

export default Ship;
