import React from 'react';

function Invoice(props) {
  const { invoiceNo, from, billInfo, shipTo, date, payterms, duedate } = props;
  const { onMetaChange } = props;
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                //id="exampleFormControlFile1"
              />
            </div>
          </div>
          <div className="col-sm-6 invoice">
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
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
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
          </div>
          <div className="col">
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
          </div>
        </div>

        {/*} <div className="row">
            <div className="col">
              <label
                htmlFor="example-date-input"
                className="col-2 col-form-label"
              >
                Notes
              </label>
              <textarea
                className="form-control"
                //id="inlineFormInputGroup"
                placeholder="Notes - any relevant information not already covered"
              ></textarea>
            </div>
            <div className="col">
              col2
              <div className="row"></div>
              <div className="row">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label
                htmlFor="example-date-input"
                className="col-2 col-form-label"
              >
                Terms
              </label>
              <textarea
                className="form-control"
                //id="inlineFormInputGroup"
                placeholder="Terms and conditions - late fees,payment methods,delivery schedule"
              ></textarea>
            </div>
            <div className="col">
              col4
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
          </div>*/}
      </form>
    </div>
  );
}

export default Invoice;
