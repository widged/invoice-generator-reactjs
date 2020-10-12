import React, { Component, Fragment } from 'react';

export const Terms = (props) => {
  const { terms, onTermsChange } = props;

  return (
    <Fragment>
      <label htmlFor="example-date-input" className="col-2 col-form-label">
        Terms
      </label>
      <textarea
        className="form-control"
        //id="inlineFormInputGroup"
        value={terms}
        onChange={onTermsChange}
        placeholder="Terms and conditions - late fees,payment methods,delivery schedule"
      ></textarea>
    </Fragment>
  );
};

export default Terms;
