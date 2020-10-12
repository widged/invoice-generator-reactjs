import React from 'react';
import InvoiceItemsManager from '../InvoiceItemsManager';
import '../../invoicing-application/styled.js';

const items = [
  {
    itemName: 'Webdesign',
    itemsQuantity: '1',
    itemRate: '90',
  },
  {
    itemName: 'Mentoring',
    itemsQuantity: '1',
    itemRate: '80',
  },
];
const Scenario = () => {
  const onItemDelete = () => {
    window.alert('delete');
  };
  return <InvoiceItemsManager items={items} del={onItemDelete} />;
};

export default Scenario;
