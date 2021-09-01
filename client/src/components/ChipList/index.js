import React from 'react';

import classes from './style.module.css';

const ChipList = () => {
  return (
    <div className={classes.chipWrapper}>
      <div className="chip">Test chip</div>
      <div className="chip">Test chip</div>
      <div className="chip">Test chip</div>
    </div>
  );
};

export default ChipList;
