import React from 'react';
function AddMoreInvoice(props) {
  return (
    <div className="row">
      {/*<tbody>
        <tr>
          <th scope="row">
            <input
              className="form-control mr-1"
              type="text"
              value={props.item.itemName}
              onChange={(e) => {
                props.onChangeHandler(e, props.ind, "name");
              }}
            />
          </th>
          <td>
            <input
              className="form-control mr-1"
              type="text"
              value={props.item.itemsQuantity}
              onChange={(e) => {
                props.onChangeHandler(e, props.ind, "Quan");
              }}
            />
          </td>
          <td>
            <input
              className="form-control"
              type="text"
              value={props.item.itemRate}
              onChange={(e) => {
                props.onChangeHandler(e, props.ind, "Rate");
              }}
            />
          </td>
          <td>
            <input
              className="form-control"
              type="text"
              value={props.item.itemsQuantity * props.item.itemRate}
            />
          </td>
          <td>
            <div
              className="btn btn-danger"
              onClick={(e) => {
                props.del(props.ind);
              }}
            >
              <i class="fas fa-trash-alt"></i>
            </div>
          </td>
        </tr>
            </tbody>*/}

      <div className="form-group col-sm-3">
        <input
          className="form-control"
          type="text"
          value={props.item.itemName}
          onChange={(e) => {
            props.onChangeHandler(e, props.ind, 'name');
          }}
        />
      </div>
      <div className="form-group col-sm-2">
        <input
          className="form-control"
          type="text"
          value={props.item.itemsQuantity}
          onChange={(e) => {
            props.onChangeHandler(e, props.ind, 'Quan');
          }}
        />
      </div>
      <div className="form-group col-sm-3">
        <input
          className="form-control"
          type="text"
          value={props.item.itemRate}
          onChange={(e) => {
            props.onChangeHandler(e, props.ind, 'Rate');
          }}
        />
      </div>
      <div className="form-group col-sm-3">
        <input
          className="form-control"
          type="text"
          value={props.item.itemsQuantity * props.item.itemRate}
        />
      </div>
      <div className="form-group col-sm-1">
        <div
          className="btn btn-danger"
          onClick={(e) => {
            props.del(props.ind);
          }}
        >
          <i className="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
}
export default AddMoreInvoice;
