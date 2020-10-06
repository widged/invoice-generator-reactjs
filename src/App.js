import React from "react";
import Form from "./Invoice";
import Temp from "./Temp";
import Invoice from "./Invoice.js";
import InvoiceDetails from "./InvoiceDetails";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      invoiceNumber: "",
      from: "",
      date: "10-10-2018",
      duedate: "10-10-2018",
      payterms: "",
      billInfo: "",
      shipTo: "",
      notes: "",
      terms: "",
      totalAmount: "",
      tax: "",
      invoiceItems: [
        {
          itemName: "",
          itemsQuantity: "",
          itemRate: "",
          amount: "",
        },
      ],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  addNewItem = () => {
    this.setState({
      invoiceItems: [
        ...this.state.invoiceItems,
        { itemName: "", itemsQuantity: 0, itemRate: 0 },
      ],
    });
  };
  deleteItem = (ind) => {
    let item = [...this.state.invoiceItems];
    this.state.invoiceItems.map((invoice, index) => {
      if (index === ind) {
        item.splice(ind, 1);
      }
    });
    this.setState({
      invoiceItems: [...item],
    });
  };

  handleChange = (e, name) => {
    if (name === "invoice") {
      this.setState({ invoiceNumber: e.target.value });
    }
    if (name === "from") {
      this.setState({ from: e.target.value });
    }
    if (name === "date") {
      this.setState({ date: e.target.value });
    }
    if (name === "payterms") {
      this.setState({ payterms: e.target.value });
    }
    if (name === "duedate") {
      this.setState({ duedate: e.target.value });
    }
    if (name === "bill") {
      this.setState({ billInfo: e.target.value });
    }
    if (name === "shipTo") {
      this.setState({ shipTo: e.target.value });
    }
  };

  handleOnChange = (event, ind, Name) => {
    let item = [...this.state.invoiceItems];
    this.state.invoiceItems.map((invoicc, index) => {
      if (index == ind) {
        if (Name == "name") item[index].itemName = event.target.value;
        if (Name == "Quan") item[index].itemsQuantity = event.target.value;
        if (Name == "Rate") item[index].itemRate = event.target.value;
      }
    });
    this.setState({
      invoiceItems: [...item],
    });
  };

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("data"));

    if (localStorage.getItem("data")) {
      this.setState({
        invoiceNumber: this.userData.invoiceNumber,
        from: this.userData.from, //mandatory fields
        billInfo: this.userData.billInfo, //mandatory fields
        shipTo: this.userData.shipTo,
        payterms: this.userData.payterms,
        date: this.userData.date,
        notes: this.userData.notes,
        terms: this.userData.terms,
        //paymentTerms: this.userData.paymentTerms,
        duedate: this.userData.duedate,
        tax: this.userData.tax,
      });
    } else {
      this.setState({
        invoiceNumber: "",
        from: "", //mandatory fields
        billInfo: "", //mandatory fields
        shipTo: "",
        date: "",
        notes: "",
        terms: "",
        payterms: "",
        duedate: "",
        tax: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("data", JSON.stringify(nextState));
  }

  convertPdf = () => {
    var pdfConverter = require("jspdf");
    let totalAmount = 0;
    var doc = new pdfConverter();
    //doc.addImage(logo, "JPEG", 130, 10, 70, 40);
    doc.setFontSize(26);
    doc.setFontType("bold");
    doc.text(10, 20, "INVOICE");
    doc.setFontSize(16);
    doc.setFont("loto");
    doc.setFontType("normal");
    doc.setTextColor(0);
    doc.text(10, 30, "# " + this.state.invoiceNumber);
    doc.text(10, 37, "Bill to :");
    doc.setTextColor(80);
    doc.text(10, 44, this.state.billInfo);
    doc.text(10, 60, "Date  :" + this.state.date);

    doc.setLineWidth(12);
    doc.setDrawColor(44, 68, 71);
    doc.line(210, 70, 0, 70);
    doc.setTextColor(256);
    doc.text(10, 72, "Item");
    doc.text(95, 72, "Quantity");
    doc.text(135, 72, "Rate");
    doc.text(175, 72, "Amount");
    doc.setTextColor(0);
    this.state.invoiceItems.map((item, index) => {
      totalAmount += item.itemRate * item.itemsQuantity;

      doc.text(10, 82 + index * 8, item.itemName);
      doc.text(95, 82 + index * 8, "" + item.itemsQuantity);
      doc.text(135, 82 + index * 8, "Rs." + item.itemRate);
      doc.text(175, 82 + index * 8, "Rs." + item.itemRate * item.itemsQuantity);
    });

    doc.text(100, 150, "Subtotal:  " + " Rs." + totalAmount);
    doc.text(
      100,
      160,
      "CGST+IGST (12%):  " + " Rs." + (totalAmount * 12) / 100
    );
    doc.text(
      100,
      170,
      "Total:  " + " Rs." + ((totalAmount * 12) / 100 + totalAmount)
    );

    doc.save("invoice.pdf");
  };
  render() {
    return (
      <div>
        <h1
          style={{ textAlign: "center", fontSize: "45px", fontWeight: "20px" }}
        >
          Invoice Generator
        </h1>
        <div className="invoice-wrapper">
          <Invoice
            handleChange={this.handleChange}
            from={this.state.from}
            date={this.state.date}
            payterms={this.state.payterms}
            duedate={this.state.duedate}
            billInfo={this.state.billInfo}
            shipTo={this.state.shipTo}
            invoiceNo={this.state.invoiceNumber}
          />
          <InvoiceDetails
            //pdf={this.convertPdf}
            items={this.state.invoiceItems}
            event={this.addNewItem}
            ItemName={this.handleItemName}
            del={this.deleteItem}
            onChangeHandler={this.handleOnChange}
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <label
                  htmlFor="example-date-input"
                  className="col-2 col-form-label"
                >
                  Notes
                </label>
                <textarea
                  className="form-control"
                  value={this.state.notes}
                  onChange={(e) => this.setState({ notes: e.target.value })}
                  placeholder="Notes - any relevant information not already covered"
                ></textarea>
              </div>

              <div className="col-sm-6">
                <label
                  htmlFor="example-date-input"
                  className="col-2 col-form-label"
                >
                  Subtotal
                </label>
                $<p>{this.state.totalAmount}</p>
                <div className="form-row">
                  <div className="col"></div>
                  <div className="col-auto">
                    <div className="input-group mb-5">
                      <label
                        htmlFor="example-date-input"
                        className="col-2 col-form-label"
                      >
                        Tax
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.tax}
                        onChange={(e) => this.setState({ tax: e.target.value })}
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
                  value={this.state.terms}
                  onChange={(e) => this.setState({ terms: e.target.value })}
                  placeholder="Terms and conditions - late fees,payment methods,delivery schedule"
                ></textarea>
              </div>
              <div className="col">
                Total ${this.totalAmount}
                {/*<div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                </div>*/}
              </div>
            </div>
          </div>
        </div>
        <h3 style={{ textAlign: "center" }}>
          Currency:<strong>USD</strong>
        </h3>
        {/*} <button style={{ alignItems: "center" }} className="btn btn-primary">
          Send Invoice
    </button>*/}

        <div className="col-sm-12">
          <button
            className="btn btn-primary" // col-sm-6 sol-xs-12 mt-5"
            onClick={this.convertPdf}
            style={{ margin: "20px auto", display: "block" }}
          >
            Generate PDF
          </button>
        </div>
      </div>
    );
  }
}

export default App;
