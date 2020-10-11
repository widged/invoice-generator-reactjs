export const computeTotals = (invoiceItems, tax) => {
  const subtotal = [...invoiceItems].reduce((acc, d) => {
    const { itemsQuantity: qty, itemRate: rate } = d;
    console.log(d);
    if (qty && rate) {
      acc = acc + qty * rate;
    }
    return acc;
  }, 0);
  const vat = subtotal * (tax / 100);
  const total = subtotal + vat;
  return { subtotal, total };
};
