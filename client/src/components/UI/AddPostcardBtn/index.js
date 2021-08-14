import React from 'react';
import { Link } from 'react-router-dom';

const AddPostcardBtn = () => {
  return (
    <div className="fixed-action-btn">
      <Link
        style={{ position: 'absolute', bottom: '50px', right: '50px' }}
        to="/postcards/new"
        className="btn-floating btn-large waves-effect waves-light red"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default AddPostcardBtn;
