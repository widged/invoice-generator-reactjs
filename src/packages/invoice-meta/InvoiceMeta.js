import React from 'react';
import { Row, Col } from '../grid-system/styled-grid';
function Invoice(props) {
  const { invoiceNo, from, billInfo, shipTo, date, payterms, duedate } = props;
  const { onMetaChange } = props;
  return (
    <form>
      <Row>
        <Col>
          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              //id="exampleFormControlFile1"
            />
          </div>
        </Col>
        <Col className="invoice">
          <h1>INVOICE</h1>

          <div className="form-row">
            <div className="col"></div>
            <div className="col-auto">
              <div className="input-group mb-5">
                <div className="input-group-prepend">
                  <div className="input-group-text">#</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={invoiceNo}
                  onChange={onMetaChange}
                  data-field="invoiceNumber"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="row mb-1 width">
            <textarea
              className="form-control"
              //id="inlineFormInputGroup"
              value={from}
              onChange={onMetaChange}
              data-field="from"
              placeholder="Who is this invoice from? (required)"
            ></textarea>
          </div>
          <div className="form-group row">
            <div className="col">
              <label htmlFor="example-date-input" className="col col-form-label">
                Bill To
              </label>
              <textarea
                className="form-control"
                //id="inlineFormInputGroup"
                placeholder="Who is this invoice to? (required)"
                value={billInfo}
                data-field="billInfo"
                onChange={onMetaChange}
              ></textarea>
            </div>
            <div className="col">
              <label htmlFor="example-date-input" className="col col-form-label">
                Ship To
              </label>

              <textarea
                className="form-control"
                //id="inlineFormInputGroup"
                value={shipTo}
                data-field="shipTo"
                onChange={onMetaChange}
                placeholder="(optional)"
              ></textarea>
            </div>
          </div>
        </Col>
        <Col>
          <div className="row invoice mb-1">
            <label htmlFor="example-date-input" className="col-6 col-form-label">
              Date
            </label>
            <div className="col-6">
              <input
                className="form-control"
                type="date"
                value={date}
                data-field="date"
                onChange={onMetaChange}
                id="example-date-input"
              />
            </div>
          </div>
          <div className="row invoice mb-1">
            <label htmlFor="example-date-input" className="col-6 col-form-label">
              Payment Terms
            </label>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={payterms}
                data-field="payterms"
                onChange={onMetaChange}
                placeholder=""
                id="example-date-input"
              />
            </div>
          </div>

          <div className="row invoice">
            <label htmlFor="example-date-input" className="col-6 col-form-label">
              Due Date
            </label>
            <div className="col-6">
              <input
                className="form-control"
                type="date"
                value={duedate}
                onChange={onMetaChange}
                data-field="duedate"
                id="example-date-input"
              />
            </div>
          </div>
        </Col>
      </Row>
    </form>
  );
}

export default Invoice;
