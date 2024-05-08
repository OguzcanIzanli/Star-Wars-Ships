import "./Starships.style.css";
import millenniumFalcon from "../../../public/millenniumFalcon.png";
import useFetch from "../../hooks/useFetch";

const Starships = () => {
  const url = "https://swapi.dev/api/starships";
  const { data } = useFetch(url);

  if (!data.results) {
    return <div>Loading...</div>;
  }
  console.log(data.results);
  return (
    <div className="shipContainer">
      {data.results.map((ship, index) => (
        <div key={index} className="shipCard">
          <div className="shipImg">
            <img src={millenniumFalcon} alt="Millennium Falcon" />
          </div>
          <div className="shipName">{ship.name}</div>
          <div className="shipModel">
            <span>Model:</span> {ship.model}
          </div>
          <div className="shipHyperdriveRating">
            <span>Hyperdrive Rating:</span> {ship.hyperdrive_rating}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Starships;

{
  /* <div key={index} className="shipCard">
          <div className="shipName">{ship.name}</div>
          <div className="shipImg">{}</div>
          <div className="shipModel">Model: {ship.model}</div>
          <div className="shipHyperdriveRating">
            Hyperdrive Rating: {ship.hyperdrive_rating}
          </div>
          <div className="shipMaxSpeed">
            Max Atmosphering Speed: {ship.max_atmosphering_speed}
          </div>
          <div className="shipManufacturer">
            Manufacturer: {ship.manufacturer}
          </div>
          <div className="shipCrew">Crew: {ship.crew}</div>
          <div className="shipCargoCapacity">
            Cargo Capacity: {ship.cargo_capacity}
          </div>
        </div> */
}
