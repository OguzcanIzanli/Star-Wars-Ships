import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ShipContext = createContext();

export const ShipProvider = ({ children }) => {
  const [ship, setShip] = useState([]);

  const values = {
    ship,
    setShip,
  };

  return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>;
};

ShipProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShip = () => useContext(ShipContext);
