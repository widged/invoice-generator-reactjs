import React from "react";
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
          //amount: "0",
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
      if (index === ind) {
        if (Name === "name") item[index].itemName = event.target.value;
        if (Name === "Quan") item[index].itemsQuantity = event.target.value;
        if (Name === "Rate") item[index].itemRate = event.target.value;
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
        invoiceItems: [
          {
            itemName: this.userData.itemName,
            itemsQuantity: this.userData.itemsQuantity,
            itemRate: this.userData.itemRate,
            //amount: "",
          },
        ],
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
        invoiceItems: [
          {
            itemName: "",
            itemsQuantity: "",
            itemRate: "",
            //amount: "",
          },
        ],
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

    // Empty square
    doc.setDrawColor(0);
    doc.setFillColor(211, 211, 211);
    doc.rect(0, 0, 900, 100, "F");

    doc.text(20, 30, "From");
    doc.text(20, 40, this.state.from);
    doc.text(175, 30, "Bill To");
    doc.text(175, 40, this.state.billInfo);
    doc.text(20, 60, "INVOICE");
    doc.text(20, 70, this.state.invoiceNumber);
    doc.text(20, 80, this.state.date);

    //TOTAL
    doc.setDrawColor(0);
    doc.setFillColor(0, 0, 0);
    doc.rect(110, 50, 85, 30, "F");
    //ITEMS
    doc.text(20, 93, "Item");
    doc.text(95, 93, "Quantity");
    doc.text(135, 93, "Rate");
    doc.text(175, 93, "Amount");

    this.state.invoiceItems.map((item, index) => {
      totalAmount += item.itemRate * item.itemsQuantity;

      doc.text(20, 110 + index * 8, item.itemName);
      doc.text(95, 110 + index * 8, "" + item.itemsQuantity);
      doc.text(135, 110 + index * 8, "$" + item.itemRate);
      doc.text(175, 110 + index * 8, "$" + item.itemRate * item.itemsQuantity);
      doc.setLineWidth(12);
    });
    //var logo =
    //"https://www.freepik.com/free-vector/green-abstract-letter-h-logo_821643.htm#page=1&query=web%20development%20logo&position=10";

    //doc.addImage(logo, "JPEG", 0, 30, 70, 40);

    doc.setDrawColor(0);
    doc.setFillColor(211, 211, 211);
    doc.rect(20, 256, 120, 12, "F");

    doc.text(20, 257, "Subtotal:  " + " $" + totalAmount);
    doc.text(50, 257, "Tax:  " + " $" + (totalAmount * 12) / 100);
    doc.text(
      120,
      257,
      "Total:  " + " $" + ((totalAmount * 12) / 100 + totalAmount)
    );
    doc.text(20, 273, "Notes");
    doc.text(120, 273, this.state.notes);
    doc.setLineWidth(0.5);
    doc.line(20, 275, 190, 275);
    doc.text(20, 280, this.state.terms);

    doc.save("invoice" + this.state.invoiceNumber + ".pdf");
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
                $
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
