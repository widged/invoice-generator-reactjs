import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Invoice from './Invoice.js';
import InvoiceItemsManager from '../invoice-items/InvoiceItemsManager';
import NotesAndTerms from './NotesAndTerms';
import Subtotal from '../subtotal/Subtotal';
import Total from '../total/Total';
import './InvoiceManager.scss';
import { convertToPdf } from './convertToPdf';
import { computeTotals } from './computeTotals';
const PageBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalsBox = styled.div``;

const DEFAULT_ITEMS = [
  {
    itemName: '',
    itemsQuantity: '',
    itemRate: '',
    //amount: "0",
  },
];

const MOCK_DATA = {
  tax: '18',
  invoiceItems: [
    {
      itemName: 'Webdesign',
      itemsQuantity: '2',
      itemRate: '90',
    },
    {
      itemName: 'Mentoring',
      itemsQuantity: '1',
      itemRate: '80',
    },
  ],
};

class InvoiceManager extends Component {
  constructor() {
    super();
    this.state = {
      invoiceNumber: '',
      from: '',
      date: '10-10-2018',
      duedate: '10-10-2018',
      payterms: '',
      billInfo: '',
      shipTo: '',
      notes: '',
      terms: '',
      tax: '',
      invoiceItems: DEFAULT_ITEMS,
      ...MOCK_DATA,
    };

    this.bound = {};
    this.bound.onTaxChange = (e) => this.setState({ tax: e.target.value });
    this.bound.onNotesChange = (e) => this.setState({ notes: e.target.value });
  }

  handleChange = (e, name) => {
    if (name === 'invoice') {
      this.setState({ invoiceNumber: e.target.value });
    }
    if (name === 'from') {
      this.setState({ from: e.target.value });
    }
    if (name === 'date') {
      this.setState({ date: e.target.value });
    }
    if (name === 'payterms') {
      this.setState({ payterms: e.target.value });
    }
    if (name === 'duedate') {
      this.setState({ duedate: e.target.value });
    }
    if (name === 'bill') {
      this.setState({ billInfo: e.target.value });
    }
    if (name === 'shipTo') {
      this.setState({ shipTo: e.target.value });
    }
  };

  whenInvoiceItemsChange = (items) => {
    /*
    this.setState({
      invoiceItems: items,
    });
    */
  };

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('data'));

    if (4 == 5 && localStorage.getItem('data')) {
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
    } else if (4 === 5) {
      this.setState({
        invoiceNumber: '',
        from: '', //mandatory fields
        billInfo: '', //mandatory fields
        shipTo: '',
        date: '',
        notes: '',
        terms: '',
        payterms: '',
        duedate: '',
        tax: '',
        invoiceItems: [
          {
            itemName: '',
            itemsQuantity: '',
            itemRate: '',
            //amount: "",
          },
        ],
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('data', JSON.stringify(nextState));
  }

  onConvertPdf = () => {
    const { from, billInfo, invoiceNumber, date, invoiceItems, notes, terms } = this.state;

    convertToPdf({
      from,
      billInfo,
      invoiceNumber,
      date,
      invoiceItems,
      notes,
      terms,
    });
  };

  render() {
    // :TODO: move it out
    const onTermsChange = (e) => this.setState({ terms: e.target.value });

    const { from, date, payterms, duedate, billInfo, shipTo, invoiceNumber } = this.state;
    // invoice items
    const { invoiceItems } = this.state;
    const { whenInvoiceItemsChange } = this;
    // subtotal
    const { tax } = this.state;
    const { onTaxChange } = this.bound;

    const { subtotal, total: totalAmount } = computeTotals(invoiceItems, tax);
    const notesAndTermsProps = {
      notes: this.state.notes,
      onNotesChange: this.bound.onNotesChange,
      terms: this.state.terms,
      onTermsChange,
    };
    // notes and terms

    return (
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '45px', fontWeight: '20px' }}>
          Invoice Generator
        </h1>
        <div className="invoice-wrapper">
          <Invoice
            handleChange={this.handleChange}
            from={from}
            date={date}
            payterms={payterms}
            duedate={duedate}
            billInfo={billInfo}
            shipTo={shipTo}
            invoiceNo={invoiceNumber}
          />
          <InvoiceItemsManager items={invoiceItems} whenChange={whenInvoiceItemsChange} />

          <PageBottom>
            <NotesAndTerms />
            <TotalsBox>
              <Subtotal tax={tax} onTaxChange={onTaxChange} subtotal={subtotal.toFixed(2)} />
              <Total total={totalAmount.toFixed(2)} />
            </TotalsBox>
          </PageBottom>
        </div>
        <h3 style={{ textAlign: 'center' }}>
          Currency:<strong>USD</strong>
        </h3>
        {/*} <button style={{ alignItems: "center" }} className="btn btn-primary">
          Send Invoice
    </button>*/}

        <div className="col-sm-12">
          <button
            className="btn btn-primary" // col-sm-6 sol-xs-12 mt-5"
            onClick={this.onConvertPdf}
            style={{ margin: '20px auto', display: 'block' }}
          >
            Generate PDF
          </button>
        </div>
      </div>
    );
  }
}

export default InvoiceManager;
