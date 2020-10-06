/*import React from "react";
//import logo from '../download.jpg';

function Forms(props) {
  return (
    <div className="row mt-4">
      <div className="col-sm-6 col-xs-12"></div>
      <div className="col-sm-6 col-xs-12 mt-5">
        <form>
          <label>INVOICE</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">#</div>
            </div>
            <input
              type="text"
              className="form-control"
              //id="inlineFormInputGroup"
              //value={props.invoiceNo}
              placeholder="Invoice Number"
              //onChange={(e) => props.handleChange(e, "invoice")}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              className="form-control"
              type="date"
              //value={props.date}
              //id="example-date-input"
              // onChange={(e) => props.handleChange(e, "date")}
            />
          </div>
        </form>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label>Bill To</label>
          <textarea
            className="form-control"
            //id="exampleTextarea"
            rows="3"
            
            //value={props.billInfo}
            //onChange={(e) => props.handleChange(e, "bill")}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
export default Forms;*/
var doc = new jsPDF();
doc.setLineWidth(100);
doc.setDrawColor(211, 211, 211);
doc.line(210, 70, 0, 70);
doc.text(20, 30, "Bill To");
doc.text(175, 30, "Ship To");

doc.text(20, 60, "INVOICE");
doc.text(20, 70, "27-08-1990");

/*doc.text(20, 90, "Item");
doc.text(95, 90, "Quantity");
doc.text(135, 90, "Rate");
doc.text(175, 90, "Amount");

var doc = new jsPDF();
doc.setLineWidth(120);
doc.setDrawColor(211, 211, 211);
doc.line(220, 70, 0, 70);
doc.text(20, 30, "Bill To");
doc.text(175, 30, "Ship To");

doc.text(20, 60, "INVOICE");
doc.text(20, 70, "27-08-1990");

doc.setDrawColor(0);
doc.setFillColor(0, 0, 0);
doc.rect(100, 20, 10, 10, "F");

doc.text(20, 90, "Item");
doc.text(95, 90, "Quantity");
doc.text(135, 90, "Rate");
doc.text(175, 90, "Amount");
doc.setLineWidth(90);*/

var doc = new jsPDF();

// Empty square
doc.setDrawColor(0);
doc.setFillColor(211, 211, 211);
doc.rect(0, 0, 900, 100, "F");

// Filled square
//doc.line(220, 70, 0, 70);
doc.text(20, 30, "Bill To");
doc.text(175, 30, "Ship To");

doc.text(20, 60, "INVOICE");
doc.text(20, 70, "27-08-1990");
//TOTAL
doc.setDrawColor(0);
doc.setFillColor(0, 0, 0);
doc.rect(110, 50, 85, 30, "F");
//ITEMS
doc.text(20, 93, "Item");
doc.text(95, 93, "Quantity");
doc.text(135, 93, "Rate");
doc.text(175, 93, "Amount");

// Filled red square
