export const convertToPdf = (props) => {
  var pdfConverter = require('jspdf');

  const { from, billInfo, invoiceNumber, date, invoiceItems, notes, terms, logo } = props;
  var doc = new pdfConverter();

  // Empty square
  doc.setDrawColor(0);
  doc.setFillColor(211, 211, 211);
  doc.rect(0, 0, 900, 104, 'F');

  //LOGO
  doc.addImage(logo, 20, 8, 30, 30);
  let lineY = 48;
  doc.text(20, lineY, 'From');
  doc.text(20, lineY + 8, from);
  doc.text(175, lineY, 'Bill To');
  doc.text(175, lineY + 8, billInfo);
  doc.text(20, lineY + 24, 'INVOICE');
  doc.text(20, lineY + 32, invoiceNumber);
  doc.text(20, lineY + 40, date);

  /*
  doc.setDrawColor(0);
  doc.setFillColor(0, 0, 0);
  doc.rect(110, 50, 85, 30, 'F');
  */
  //ITEMS
  doc.text(20, 98, 'Item');
  doc.text(95, 98, 'Quantity');
  doc.text(135, 98, 'Rate');
  doc.text(175, 98, 'Amount');

  let totalAmount = invoiceItems.reduce((acc, item, index) => {
    const { itemName, itemsQuantity, itemRate } = item;
    acc = acc + itemRate * itemsQuantity;
    return acc;
  }, 0);

  lineY = invoiceItems.reduce((lineY, item, index) => {
    const { itemName, itemsQuantity, itemRate } = item;
    lineY = lineY + 8;
    doc.text(20, lineY, itemName || '');
    doc.text(95, lineY, '' + itemsQuantity || '');
    doc.text(135, lineY, '$' + itemRate || '');
    doc.text(175, lineY, '$' + itemRate * itemsQuantity);
    doc.setLineWidth(12);
    if (lineY > 250) {
      doc.addPage();
      lineY = 24; // Restart height position
    }

    return lineY;
  }, 110);

  //var logo =
  //"https://www.freepik.com/free-vector/green-abstract-letter-h-logo_821643.htm#page=1&query=web%20development%20logo&position=10";

  //doc.addImage(logo, "JPEG", 0, 30, 70, 40);

  doc.setDrawColor(0);
  doc.setFillColor(211, 211, 211);
  doc.rect(12, 236, 180, 24, 'F');

  doc.text(20, 246, 'SUBTOTAL');
  doc.text(20, 254, '$' + totalAmount);
  doc.text(70, 246, 'TAX/FEES');
  doc.text(70, 254, ' $' + (totalAmount * 12) / 100);
  doc.text(160, 246, 'TOTAL');
  doc.text(160, 254, ' $' + ((totalAmount * 12) / 100 + totalAmount));
  doc.text(20, 273, 'Notes');
  doc.text(120, 273, notes);
  doc.setLineWidth(0.5);
  doc.line(20, 275, 190, 275);
  doc.text(20, 280, terms);

  doc.save('invoice' + invoiceNumber + '.pdf');
};
