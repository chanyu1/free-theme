import React from 'react';
import styled from 'styled-components';

const ChipWrapperDiv = styled.div`
  padding: 20px 20px 0;
`;
// border: 1px solid red;

const ChipList = () => {
  return (
    <ChipWrapperDiv>
      <div className="chip">Test chip</div>
      <div className="chip">Test chip</div>
      {/* <div className="chip">Test chip</div> */}
    </ChipWrapperDiv>
  );
};

export default ChipList;
