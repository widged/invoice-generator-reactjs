import React, { Component, Fragment } from 'react';
import InvoicingApplication from '../InvoicingApplication';
import { mockData } from './mock-data';
import { pdfData } from './mock-pdf-data';
import { convertToPdf } from '../convertToPdf';

function getBase64Image(src, callback, outputFormat) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let dataURL;
    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    ctx.drawImage(img, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };

  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    img.src = src;
  }
}

class Scenario extends Component {
  componentDidMount() {
    const { logo } = pdfData;

    getBase64Image(
      logo,
      (base64) => {
        console.log(base64);
        convertToPdf({ ...pdfData, logo: base64 });
      },
      'image/jpeg'
    );
  }
  render() {
    // convertToPdf(pdfData);
    return <InvoicingApplication {...mockData} />;
  }
}

export default Scenario;
