import React, { Component, Fragment } from 'react';

export const Notes = (props) => {
  const { notes, onNotesChange } = props;
  return (
    <Fragment>
      <label htmlFor="example-date-input" className="col-2 col-form-label">
        Notes
      </label>
      <textarea
        className="form-control"
        value={notes}
        onChange={onNotesChange}
        placeholder="Notes - any relevant information not already covered"
      ></textarea>
    </Fragment>
  );
};

export default Notes;
