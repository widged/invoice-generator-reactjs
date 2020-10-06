import React from "react";
import AddMoreInvoice from "./AddMoreInvoice";
function InvoiceDetails(props) {
  return (
    <div>
      <div className="card-body">
        <form>
          {props.items.map((item, index) => {
            return (
              <AddMoreInvoice
                item={item}
                ind={index}
                del={props.del}
                onChangeHandler={props.onChangeHandler}
              />
            );
          })}
        </form>
        <div className="btn btn-primary" onClick={props.event}>
          + Line Item
        </div>
      </div>
      {/*} <div className="row">
        <div className="col-sm-12 mt-5">
          <div
            className="btn btn-primary col-sm-6 sol-xs-12 mt-5"
            onClick={props.pdf}
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
