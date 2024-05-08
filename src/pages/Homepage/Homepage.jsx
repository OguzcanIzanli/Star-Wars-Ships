import "./Homepage.style.css";
import starwarsLogo from "../../../public/images/starwars.png";
import darthVader from "../../../public/images/darthVader.png";

import Starships from "../../components/Starships/Starships";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <img className="starwarsLogo" src={starwarsLogo} alt="Starwars" />
      <img className="darthVaderLogo" src={darthVader} alt="Darth Vader" />
      <Starships />
    </div>
  );
};

export default Homepage;
