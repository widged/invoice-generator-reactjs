import React from 'react';

const SubTotal = (props) => {
  const { tax, onTaxChange } = props;

  return (
    <div className="form-row">
      <div className="col"></div>
      <div className="col-auto">
        <div className="input-group mb-5">
          <label htmlFor="example-date-input" className="col-2 col-form-label">
            Tax
          </label>
          <input type="text" className="form-control" value={tax} onChange={onTaxChange} />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTotal;
