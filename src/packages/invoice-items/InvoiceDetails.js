import React, { Fragment } from 'react';
import AddOneItem from './AddOneItem';
function InvoiceDetails(props) {
  const { items, onDeleteItem, whenItemChange, onAddItem } = props;

  console.log('InvoiceDetails', items);

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
            const onChange = (e) => {
              const { field } = e.currentTarget.dataset;
              if (['itemName', 'itemsQuantity', 'itemRate'].includes(field)) {
                item = { ...item, [field]: e.target.value };
                whenItemChange(item, index);
              }
            };
            const onDelete = (e) => {
              onDeleteItem(index);
            };
            return <AddOneItem {...item} onDelete={onDelete} onChange={onChange} />;
          })}
        </form>
        <div className="btn btn-primary" onClick={onAddItem}>
          + Line Item
        </div>
      </div>
    </div>
  );
}
export default InvoiceDetails;
