import React from 'react';

/**
 * @param {function} imgInputHandler
 * @param {String}   btnText
 * @param {String}   placeholder
 * @param {String}   inputFiledText
 */
const MolImgInputField = ({
  imgInputHandler,
  btnText,
  placeholder,
  inputFiledText,
}) => {
  return (
    <div className="file-field input-field">
      <div className="btn blue">
        <span>{btnText}</span>
        <input
          name="photos"
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={imgInputHandler}
          multiple
        />
      </div>
      <div className="file-path-wrapper">
        <input
          className="file-path grey-text text-darken-1"
          type="text"
          placeholder={placeholder}
          value={inputFiledText && inputFiledText}
          readOnly
        />
      </div>
    </div>
  );
};

export default MolImgInputField;
