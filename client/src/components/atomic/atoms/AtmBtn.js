import React from 'react';

/**
 * @param {String} buttonText
 * @param {String} color
 * @param {String} icon
 */

const AtmBtn = ({ buttonText, color, icon }) => {
  return (
    <button type="submit" className={`${color} btn-flat right white-text`}>
      {buttonText}
      <i className="material-icons right">{icon}</i>
    </button>
  );
};

export default AtmBtn;
