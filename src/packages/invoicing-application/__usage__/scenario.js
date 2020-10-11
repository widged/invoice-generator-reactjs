import React from 'react';
import InvoicingApplication from '../InvoicingApplication';

const Scenario = () => {
  const mockData = {
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

  return <InvoicingApplication {...mockData} />;
};

export default Scenario;
