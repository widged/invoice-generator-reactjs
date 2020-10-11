export const dataToLocalStorage = (obj) => {
  localStorage.setItem('data', JSON.stringify(obj));
};

export const dataFromLocalStorage = () => {
  const defaultData =
    '{"invoiceNumber":"","from":"","billInfo":"","shipTo":"","date":"","notes":"","terms":"","payterms":"","duedate":"","tax":"","itemName":"","itemsQuantity":"","itemRate":""}';
  const userData = JSON.parse(localStorage.getItem('data') || defaultData);

  const {
    invoiceNumber,
    from,
    billInfo,
    shipTo,
    payterms,
    date,
    notes,
    terms,
    paymentTerms,
    duedate,
    tax,
    itemName,
    itemsQuantity,
    itemRate,
  } = userData;
  return {
    invoiceNumber,
    from, //mandatory fields
    billInfo, //mandatory fields
    shipTo,
    payterms,
    date,
    notes,
    terms,
    //paymentTerms,
    duedate,
    tax,
    invoiceItems: [
      {
        itemName,
        itemsQuantity,
        itemRate,
        //amount: "",
      },
    ],
  };
};
