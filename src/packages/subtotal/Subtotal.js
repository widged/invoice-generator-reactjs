import React from 'react';
import TaxRate from '../tax-rate/TaxRate';
import styled from 'styled-components';

const Styled = styled.div`
  display: div;
  padding: 8px;
`;

const FullWidth = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Subtotal = (props) => {
  const { tax, onTaxChange, subtotal } = props;
  const currency = 'US';
  return (
    <Styled>
      <FullWidth>
        <span>Subtotal</span>
        <span>
          {currency}${subtotal}
        </span>
      </FullWidth>
      <TaxRate tax={tax} onTaxChange={onTaxChange} />
    </Styled>
  );
};

export default Subtotal;
