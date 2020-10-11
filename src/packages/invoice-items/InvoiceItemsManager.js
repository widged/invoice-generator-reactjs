import React, { Component } from 'react';
import InvoiceDetails from './InvoiceDetails';

const EMPTY_ITEM = { itemName: '', itemsQuantity: 0, itemRate: 0 };

class InvoiceItemsManager extends Component {
  constructor(props) {
    super(props);
    this.state = { invoiceItems: props.items || [{ ...EMPTY_ITEM }] };
    this.bound = {};
    this.bound.onAddNewItem = this.onAddNewItem.bind(this);
    this.bound.onItemNameChange = this.onItemNameChange.bind(this);
    this.bound.onDeleteItem = this.onDeleteItem.bind(this);
  }

  signalItemsChange() {
    const { invoiceItems } = this.state;
    this.props.whenChange(invoiceItems);
  }

  onAddNewItem() {
    const invoiceItems = [...this.state.invoiceItems, EMPTY_ITEM];
    this.setState({ invoiceItems }, () => {
      this.signalItemsChange();
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
    this.dispatchItemsChange();
  }
  onItemNameChange() {}

  onItemChange(event, ind, Name) {
    let item = [...this.state.invoiceItems];
    this.state.invoiceItems.map((invoicc, index) => {
      if (index === ind) {
        if (Name === 'name') item[index].itemName = event.target.value;
        if (Name === 'Quan') item[index].itemsQuantity = event.target.value;
        if (Name === 'Rate') item[index].itemRate = event.target.value;
      }
    });
    this.setState({
      invoiceItems: [...item],
    });
  }

  render() {
    const { onAddNewItem, onItemNameChange, onDeleteItem, onItemChange } = this.bound;
    const { invoiceItems } = this.state;

    return (
      <InvoiceDetails
        items={invoiceItems}
        event={onAddNewItem}
        ItemName={onItemNameChange}
        del={onDeleteItem}
        onChangeHandler={onItemChange}
      />
    );
  }
}

export default InvoiceItemsManager;
