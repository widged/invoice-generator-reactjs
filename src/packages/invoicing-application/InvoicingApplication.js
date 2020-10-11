import React, { Component, Fragment } from 'react';

import InvoiceMeta from '../invoice-meta/InvoiceMeta.js';
import InvoiceItemsManager from '../invoice-items/InvoiceItemsManager';
import NotesAndTerms from './NotesAndTerms';
import Subtotal from '../subtotal/Subtotal';
import Total from '../total/Total';
import { convertToPdf } from './convertToPdf';
import { computeTotals } from './computeTotals';
import { GlobalStyle, AppBox, PageBottom, TotalsBox } from './styled';
import { dataToLocalStorage, dataFromLocalStorage } from './localStorage';

class InvoicingApplication extends Component {
  constructor(props) {
    super(props);
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
      invoiceItems: [
        {
          itemName: '',
          itemsQuantity: '',
          itemRate: '',
          //amount: "0",
        },
      ],
      ...(props || {}),
    };

    this.bound = {};

    this.bound.onMetaChange = (e) => {
      const { field } = e.currentTarget.dataset;
      if (
        ['invoiceNumber', 'from', 'date', 'payterms', 'duedate', 'billInfo', 'shipTo'].includes(
          field
        )
      ) {
        console.log('META', { [field]: e.target.value });
        this.setState({ [field]: e.target.value });
      }
    };
    this.bound.onTaxChange = (e) => this.setState({ tax: e.target.value });
    this.bound.onNotesChange = (e) => this.setState({ notes: e.target.value });
    this.bound.onTermsChange = (e) => this.setState({ terms: e.target.value });
    this.bound.onConvertPdf = this.onConvertPdf.bind(this);
  }

  componentDidMount() {
    const obj = dataFromLocalStorage();
    this.setState(obj);
  }

  componentWillUpdate(nextProps, nextState) {
    dataToLocalStorage(nextState);
  }

  whenInvoiceItemsChange(items) {
    /*
    this.setState({
      invoiceItems: items,
    });
    */
  }

  onConvertPdf() {
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
  }

  render() {
    // invoice meta
    const { from, date, payterms, duedate, billInfo, shipTo, invoiceNumber } = this.state;
    // invoice items
    const { invoiceItems } = this.state;
    const { whenInvoiceItemsChange } = this;
    // subtotal
    const { tax } = this.state;
    const { onTaxChange, onConvertPdf, onMetaChange, onNotesChange, onTermsChange } = this.bound;

    const { subtotal, total: totalAmount } = computeTotals(invoiceItems, tax);
    // notes
    const { notes, terms } = this.state;

    return (
      <AppBox>
        <GlobalStyle />
        <h1 style={{ textAlign: 'center', fontSize: '45px', fontWeight: '20px' }}>
          Invoice Generator
        </h1>
        <div className="invoice-wrapper">
          <InvoiceMeta
            onMetaChange={onMetaChange}
            {...{ from, date, payterms, duedate, billInfo, shipTo, invoiceNumber }}
          />
          <InvoiceItemsManager items={invoiceItems} whenChange={whenInvoiceItemsChange} />

          <PageBottom>
            <NotesAndTerms {...{ notes, onNotesChange, terms, onTermsChange }} />
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
            onClick={onConvertPdf}
            style={{ margin: '20px auto', display: 'block' }}
          >
            Generate PDF
          </button>
        </div>
      </AppBox>
    );
  }
}

export default InvoicingApplication;
