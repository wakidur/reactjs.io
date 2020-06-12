import React from "react";

import PropTypes from "prop-types";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "fa-sun-o",
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "fa-snowflake-o",
  },
};

function getSeason(lat, month) {
  console.log(lat, month);
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
}

function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i
        className={`fa  fa-5x icon-left ${iconName}`}
        aria-hidden="true"
      />
      <h1>{text}</h1>
      <i className={`fa  fa-5x icon-right  ${iconName}`} aria-hidden="true" />
    </div>
  );
}

SeasonDisplay.propTypes = {
    lat: PropTypes.number
};

export default SeasonDisplay;
