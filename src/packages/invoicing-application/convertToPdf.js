export const convertToPdf = (props) => {
  var pdfConverter = require('jspdf');

  const { from, billInfo, invoiceNumber, date, invoiceItems, notes, terms } = props;
  var doc = new pdfConverter();

  // Empty square
  doc.setDrawColor(0);
  doc.setFillColor(211, 211, 211);
  doc.rect(0, 0, 900, 100, 'F');

  doc.text(20, 30, 'From');
  doc.text(20, 40, from);
  doc.text(175, 30, 'Bill To');
  doc.text(175, 40, billInfo);
  doc.text(20, 60, 'INVOICE');
  doc.text(20, 70, invoiceNumber);
  doc.text(20, 80, date);

  //TOTAL
  doc.setDrawColor(0);
  doc.setFillColor(0, 0, 0);
  doc.rect(110, 50, 85, 30, 'F');
  //ITEMS
  doc.text(20, 93, 'Item');
  doc.text(95, 93, 'Quantity');
  doc.text(135, 93, 'Rate');
  doc.text(175, 93, 'Amount');

  let totalAmount = invoiceItems.reduce((acc, item, index) => {
    const { itemName, itemsQuantity, itemRate } = item;
    acc = acc + itemRate * itemsQuantity;
    return acc;
  }, 0);

  invoiceItems.forEach((item, index) => {
    const { itemName, itemsQuantity, itemRate } = item;
    doc.text(20, 110 + index * 8, itemName || '');
    doc.text(95, 110 + index * 8, '' + itemsQuantity || '');
    doc.text(135, 110 + index * 8, '$' + itemRate || '');
    doc.text(175, 110 + index * 8, '$' + itemRate * itemsQuantity);
    doc.setLineWidth(12);
  });
  //var logo =
  //"https://www.freepik.com/free-vector/green-abstract-letter-h-logo_821643.htm#page=1&query=web%20development%20logo&position=10";

  //doc.addImage(logo, "JPEG", 0, 30, 70, 40);

  doc.setDrawColor(0);
  doc.setFillColor(211, 211, 211);
  doc.rect(20, 256, 120, 12, 'F');

  doc.text(20, 257, 'Subtotal:  ' + ' $' + totalAmount);
  doc.text(50, 257, 'Tax:  ' + ' $' + (totalAmount * 12) / 100);
  doc.text(120, 257, 'Total:  ' + ' $' + ((totalAmount * 12) / 100 + totalAmount));
  doc.text(20, 273, 'Notes');
  doc.text(120, 273, notes);
  doc.setLineWidth(0.5);
  doc.line(20, 275, 190, 275);
  doc.text(20, 280, terms);

  doc.save('invoice' + invoiceNumber + '.pdf');
};
