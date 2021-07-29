import React from 'react';

function PhotoNewForm() {
  return (
    <div>
      <h5>PhotoNewForm</h5>
      {/* {reviewFields} */}
      <button
        className="yellow darken-3 white-text btn-flat"
        // onClick={onCancel}
      >
        Back
      </button>
      <button
        // onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Submit
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

export default PhotoNewForm;
