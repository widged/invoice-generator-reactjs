import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const NotesAndTermsBox = styled.div`
  min-width: 200px;
`;

const Terms = (props) => {
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

const Notes = (props) => {
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

const NotesAndTerms = (props) => {
  const { notes, onNotesChange, terms, onTermsChange } = props;

  const notesProps = { notes, onNotesChange };
  const termsProps = { terms, onTermsChange };

  return (
    <NotesAndTermsBox>
      <Notes {...notesProps} />
      <Terms {...termsProps} />
    </NotesAndTermsBox>
  );
};

export default NotesAndTerms;
