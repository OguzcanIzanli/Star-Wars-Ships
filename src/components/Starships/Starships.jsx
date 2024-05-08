import "./Starships.style.css";
import millenniumFalcon from "../../../public/images/millenniumFalcon.png";
import lightsaber from "../../../public/images/lightsaber.png";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useShip } from "../../context/ShipContext";

let initialUrl = "https://swapi.dev/api/starships";

const Starships = () => {
  const [url, setUrl] = useState(initialUrl);
  const [newData, setNewData] = useState([]);
  const [dataButtons, setDataButtons] = useState({
    moreBtn: true,
    lessBtn: false,
  });
  const [filterValue, setFilterValue] = useState("");
  const { setShip } = useShip();

  const { data, loading } = useFetch(url);

  useEffect(() => {
    if (data.results) {
      setNewData((prev) => [...prev, ...data.results]);
    }
  }, [data.results]);

  useEffect(() => {
    if (String(data.next) == "null") {
      setDataButtons((prev) => ({ ...prev, moreBtn: false }));
    }
  }, [data.next]);

  const handleMore = () => {
    setDataButtons({ ...dataButtons, lessBtn: true });
    setUrl(data.next);
  };

  const handleLess = () => {
    setDataButtons({ moreBtn: true, lessBtn: false });
    setNewData([]);
    setUrl(initialUrl);
  };

  const filteredStarships = newData.filter(
    (ship) => (ship.model + ship.name).toLowerCase().match(filterValue)
    // new RegExp([...filterValue].join(".*")) Letter location in the word no matter
  );

  return (
    <>
      <form className="filterForm">
        <div className="inputContainer">
          <label htmlFor="filter">Name/Model</label>
          <input
            value={filterValue}
            type="text"
            id="filter"
            onChange={(e) => setFilterValue(e.target.value.toLocaleLowerCase())}
          />
        </div>
      </form>

      <div className="shipContainer">
        {filteredStarships.map((ship, index) => (
          <Link onClick={() => setShip(ship)} key={index} to="/ship">
            <div className="shipCard">
              <div className="shipImg">
                <img src={millenniumFalcon} alt="Millennium Falcon" />
              </div>
              <div className="shipName">{ship.name}</div>
              <div className="shipInfo">
                <span>Model:</span> {ship.model}
              </div>
              <div className="shipInfo">
                <span>Hyperdrive Rating:</span> {ship.hyperdrive_rating}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {
        <div className="loading">
          {loading && <img src={lightsaber} alt="Loading..." />}
        </div>
      }

      <div className="pageBtns">
        {dataButtons.moreBtn && (
          <button className="pageBtn" onClick={handleMore}>
            more
          </button>
        )}
        {dataButtons.lessBtn && (
          <button className="pageBtn" onClick={handleLess}>
            less
          </button>
        )}
      </div>
    </>
  );
};

export default Starships;
