import React, { Component } from 'react';
import InvoiceDetails from './InvoiceDetails';

const EMPTY_ITEM = { itemName: '', itemsQuantity: 0, itemRate: 0 };

class InvoiceItemsManager extends Component {
  constructor(props) {
    super(props);
    this.state = { invoiceItems: props.items || [{ ...EMPTY_ITEM }] };
    this.bound = {
      onAddNewItem: this.onAddNewItem.bind(this),
      onDeleteItem: this.onDeleteItem.bind(this),
      whenItemChange: this.whenItemChange.bind(this),
    };
  }

  signalChange() {
    const { invoiceItems } = this.state;
    this.props.whenChange(invoiceItems);
  }

  onAddNewItem() {
    const invoiceItems = [...this.state.invoiceItems, EMPTY_ITEM];
    this.setState({ invoiceItems }, () => {
      this.signalChange();
    });
  }
  onDeleteItem(ind) {
    let item = [...this.state.invoiceItems];

    this.state.invoiceItems.map((invoice, index) => {
      if (index === ind) {
        item.splice(ind, 1);
      }
    });
    this.setState({
      invoiceItems: [...item],
    });
    this.signalChange();
  }

  whenItemChange(item, idx) {
    let invoiceItems = this.state.invoiceItems.map((d, i) => {
      return i === idx ? item : d;
    });
    this.setState({ invoiceItems });
  }

  render() {
    const { onAddNewItem, onDeleteItem, whenItemChange } = this.bound;
    const { invoiceItems } = this.state;

    return (
      <InvoiceDetails
        items={invoiceItems}
        onAddItem={onAddNewItem}
        onDeleteItem={onDeleteItem}
        whenItemChange={whenItemChange}
      />
    );
  }
}

export default InvoiceItemsManager;
