import React from 'react';

/**
 * @param {String}  buttonText
 * @param {String}  color
 * @param {String}  icon
 * @param {Boolean} isDisabled
 */
const AtmBtn = ({ buttonText, color, icon, isDisabled = false }) => {
  return (
    <button
      type="submit"
      // disabled={isDisabled}
      className={`${isDisabled && 'disabled'} ${color} btn right white-text`}
    >
      {buttonText}
      <i className="material-icons right">{icon}</i>
    </button>
  );
};

export default AtmBtn;
