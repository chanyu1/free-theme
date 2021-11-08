import React from 'react';
import { Link } from 'react-router-dom';

const AtmFloatBtn = ({ location, icon, hideBtn = false }) => {
  return (
    <div className="fixed-action-btn">
      <Link
        style={
          hideBtn
            ? { display: 'none' }
            : {
                position: 'absolute',
                bottom: '50px',
                right: '50px',
              }
        }
        className="btn-floating btn-large waves-effect waves-light blue-grey darken-1"
        to={location}
      >
        <i className="material-icons">{icon}</i>
      </Link>
    </div>
  );
};

export default AtmFloatBtn;
