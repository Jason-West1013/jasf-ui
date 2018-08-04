import React from "react";
import PropTypes from "prop-types";

import { Buttons } from "./pick_style";

const VeggieButton = ({ veggies, onButtonPress }) => {
  return veggies.map(function(result, i) {
    return (
      <Buttons
        onClick={onButtonPress}
        buttonPressed={result.buttonState}
        key={i}
      >
        {result.name}
      </Buttons>
    );
  });
};

VeggieButton.propTypes = {
  veggies: PropTypes.arrayOf(Object),
  onButtonPress: PropTypes.func
};

export default VeggieButton;
