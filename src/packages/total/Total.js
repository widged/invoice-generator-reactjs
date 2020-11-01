import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
  display: div;
  padding: 8px;
  max-width: 160px;
`;

const FullWidth = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Total = (props) => {
  const { total } = props;
  return (
    <Styled>
      <FullWidth>
        <span>Total</span>
        <span>${total}</span>
        {/*<div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </div>*/}
      </FullWidth>
    </Styled>
  );
};

export default Total;
