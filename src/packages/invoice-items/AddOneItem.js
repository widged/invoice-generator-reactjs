import React from 'react';
function AddMoreInvoice(props) {
  const { itemName, itemsQuantity, itemRate } = props;
  const { onChange, onDelete } = props;
  return (
    <div className="row">
      <div className="form-group col-sm-3">
        <input
          className="form-control"
          type="text"
          value={itemName}
          onChange={onChange}
          data-field="itemName"
        />
      </div>
      <div className="form-group col-sm-2">
        <input
          className="form-control"
          type="text"
          value={itemsQuantity}
          data-field="itemsQuantity"
          onChange={onChange}
        />
      </div>
      <div className="form-group col-sm-3">
        <input
          className="form-control"
          type="text"
          value={itemRate}
          data-field="itemRate"
          onChange={onChange}
        />
      </div>
      <div className="form-group col-sm-3">
        <input className="form-control" type="text" value={itemsQuantity * itemRate} />
      </div>
      <div className="form-group col-sm-1">
        <div className="btn btn-danger" onClick={onDelete}>
          <i className="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
}
export default AddMoreInvoice;
