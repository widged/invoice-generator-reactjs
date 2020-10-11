import React, { Fragment } from 'react';
import AddMoreInvoice from './AddMoreInvoice';
function InvoiceDetails(props) {
  const { items, del: onItemDelete, onChangeHandler, event: onAddItem, pdf: onExportToPdf } = props;

  return (
    <div>
      <table className="table mb-0">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Rate</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
      </table>

      <div className="card-body">
        <form>
          {(items || []).map((item, index) => {
            return (
              <Fragment>
                <AddMoreInvoice
                  item={item}
                  ind={index}
                  del={onItemDelete}
                  onChangeHandler={onChangeHandler}
                />
              </Fragment>
            );
          })}
        </form>
        <div className="btn btn-primary" onClick={onAddItem}>
          + Line Item
        </div>
      </div>
      {/*} <div className="row">
        <div className="col-sm-12 mt-5">
          <div
            className="btn btn-primary col-sm-6 sol-xs-12 mt-5"
            onClick={onExportToPdf}
            style={{ margin: "20px auto", display: "block" }}
          >
            Generate PDF
          </div>
        </div>
        </div>*/}
    </div>
  );
}
export default InvoiceDetails;
