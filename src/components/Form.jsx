import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Logo from "../assets/logo.png"

function FormToPDF() {
  const invoiceNoRef=useRef(null);
  const invoiceDateRef=useRef(null);
  const deliveryDateRef=useRef(null);
  const billToName=useRef(null)
  const billingAddressRef=useRef(null);
  const deliveryAddressRef=useRef(null);
  const shipToName=useRef(null)
  const orderNo=useRef(null)
  const salesPerson=useRef(null)
  const referenceNo=useRef(null)
  const carrier=useRef(null)
  const poNo=useRef(null)
  const description1=useRef(null);
  const bol1=useRef(null)
  const units1=useRef(null)
  const unitPrice1=useRef(null)
  const description2=useRef(null);
  const bol2=useRef(null)
  const units2=useRef(null)
  const unitPrice2=useRef(null)
  const description3=useRef(null);
  const bol3=useRef(null)
  const units3=useRef(null)
  const unitPrice3=useRef(null)
  const description4=useRef(null);
  const bol4=useRef(null)
  const units4=useRef(null)
  const unitPrice4=useRef(null)
  const freightName1=useRef(null);
  const freightUnits1=useRef(null);
  const freightPrice1=useRef(null);
  const freightName2=useRef(null);
  const freightUnits2=useRef(null);
  const freightPrice2=useRef(null);
  const freightName3=useRef(null);
  const freightUnits3=useRef(null);
  const freightPrice3=useRef(null);
  const freightName4=useRef(null);
  const freightUnits4=useRef(null);
  const freightPrice4=useRef(null);



  const generatePDF = () => {
    const pdf = new jsPDF();
 // Add an image
 pdf.addImage(Logo, 'PNG', 15, 5, 50, 30);

// Add a border around the form data section
pdf.rect(10, 70, 190, 40);

// Form Data
pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal'); // Set font to normal
pdf.text(15, 40, "212 Arboetrum Way");
pdf.text(15, 45, "Boston MA 02021");
pdf.text(15, 50, "781-320-2636");
pdf.setFontSize(16);
pdf.setFont('helvetica', 'bold');
pdf.text(90, 50, "INVOICE");
pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal');
pdf.text(150, 15, `Invoice No: ${invoiceNoRef.current.value  || ""}`);
pdf.text(150, 20, `Invoice Date: ${invoiceDateRef.current.value  || ""}`);
pdf.text(150, 25, `Delivery Date: ${deliveryDateRef.current.value  || ""}`);
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text(25, 80, "Bill To:");
pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal');
pdf.text(40, 80,billToName.current.value);
addMultilineText(pdf, 40, 85, billingAddressRef.current.value, maxWidth, lineHeight);
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text(115, 80, "Ship To:");
pdf.setFont('helvetica', 'normal');
pdf.text(133, 80,shipToName.current.value);
addMultilineText(pdf, 133, 85, deliveryAddressRef.current.value, maxWidth, lineHeight);
pdf.rect(10,115, 190, 25);
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text(20, 122, `Order No: ${orderNo.current.value}`);
pdf.text(20, 132, `Driver Name: ${salesPerson.current.value}`);
pdf.text(90, 122, `Reference No: ${referenceNo.current.value}`);
pdf.text(90, 132, `Carrier: ${carrier.current.value}`);
pdf.text(155, 122, `PO No: ${poNo.current.value}`);
pdf.rect(10,145, 190, 10);
pdf.text(20, 151, "Description");
pdf.text(70, 151, "BOL NO");
pdf.text(110, 151, "Units");
pdf.text(150, 151, "Unit Price");
pdf.text(180, 151, "Total");
pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal');
pdf.text(20, 160, `${description1.current.value}`);
pdf.text(70, 160, `${bol1.current.value}`);
pdf.text(110, 160, `${units1.current.value ? units1.current.value + "gal" : ""}`);
pdf.text(150, 160, `${unitPrice1.current.value}`);
const total1=unitPrice1.current.value * units1.current.value;
pdf.setFontSize(10);
pdf.setFont('helvetica', 'bold');
pdf.text(180, 205, `${total1 ? "$" + total1.toFixed(2) : ""}`);
pdf.line(140, 200, 210, 200);
pdf.setFontSize(10);
pdf.setFont('helvetica', 'bold');
pdf.text(120, 205, "Products Total:");
pdf.text(180, 205, `${total1 ? "$" + total1.toFixed(2) : ""}`);
pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal');
pdf.text(20, 220, `${description2.current.value}`);
pdf.text(70, 220, `${bol2.current.value}`);
pdf.text(110, 220, `${units2.current.value ? units2.current.value + "gal" : ""}`);
pdf.text(150, 220, `${unitPrice2.current.value}`);
const total2=unitPrice2.current.value * units2.current.value;
pdf.setFont('helvetica', 'normal');
pdf.text(20, 230, `${description3.current.value}`);
pdf.text(70, 230, `${bol3.current.value}`);
pdf.text(110, 230, `${units3.current.value ? units3.current.value + "gal" : ""}`);
pdf.text(150, 230, `${unitPrice3.current.value}`);
const total3=unitPrice3.current.value * units3.current.value;
pdf.text(20, 240, `${description4.current.value}`);
pdf.text(70, 240, `${bol4.current.value}`);
pdf.text(110, 240, `${units4.current.value ? units4.current.value + "gal" : ""}`);
pdf.text(150, 240, `${unitPrice4.current.value}`);
const total4=unitPrice4.current.value * units4.current.value;
pdf.setFontSize(10);
pdf.setFont('helvetica', 'bold');
pdf.text(180, 220, `${total2 ? "$" + total2.toFixed(2) : ""}`);
pdf.setFont('helvetica', 'bold');
pdf.text(180, 230, `${total3 ? "$" + total3.toFixed(2) : ""}`);
pdf.text(180, 240, `${total4 ? "$" + total4.toFixed(2) : ""}`);
pdf.text(180, 160, `${total1 ? "$" + total1.toFixed(2) : ""}`);
pdf.line(140, 245, 210, 245);
pdf.setFontSize(10);
pdf.setFont('helvetica', 'bold');
pdf.text(120, 205, "Products Total:");
const grandTotal=total1+total2+total3+total4;
pdf.text(180, 250, `${"$"+grandTotal.toFixed(2)}`);
pdf.text(120, 250,"Grand Total:");
pdf.rect(10, 260, 190, 10);
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text(20, 266, "Freight Summary");
pdf.text(110, 266, "Freight Units");
pdf.text(150, 266, "Unit Price");
pdf.text(180, 266, "Total");
pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal');
pdf.text(20, 275, `${freightName1.current.value}`);
pdf.text(110, 275, `${freightUnits1.current.value}`);
pdf.text(150, 275, `${freightPrice1.current.value}`);
const freightTotal1=freightPrice1.current.value * freightUnits1.current.value;
pdf.text(180, 275, `${freightTotal1.toFixed(2)}`);
pdf.text(20, 280, `${freightName2.current.value}`);
pdf.text(110, 280, `${freightUnits2.current.value}`);
pdf.text(150, 280, `${freightPrice2.current.value}`);
const freightTotal2=freightPrice2.current.value * freightUnits2.current.value;
pdf.text(180, 280, `${freightTotal2.toFixed(2)}`);
pdf.text(20, 285, `${freightName3.current.value}`);
pdf.text(110, 285, `${freightUnits3.current.value}`);
pdf.text(150, 285, `${freightPrice3.current.value}`);
const freightTotal3=freightPrice3.current.value * freightUnits3.current.value;
pdf.text(180, 285, `${freightTotal3.toFixed(2)}`);
pdf.text(20, 290, `${freightName4.current.value}`);
pdf.text(110, 290, `${freightUnits4.current.value}`);
pdf.text(150, 290, `${freightPrice4.current.value}`);
const freightTotal4=freightPrice4.current.value * freightUnits4.current.value;
pdf.text(180, 290, `${freightTotal4.toFixed(2)}`);
const freightTotal=freightTotal1 + freightTotal2+freightTotal3+freightTotal4;
pdf.text(180, 296, `${freightTotal.toFixed(2)}`);
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text(145, 296, "Grand Total:");








    pdf.save('formData.pdf');
  };

  function addMultilineText(pdf, x, y, text, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    pdf.setFontSize(12);
  
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const textWidth = pdf.getStringUnitWidth(testLine) * pdf.internal.getFontSize();
  
      if (textWidth > maxWidth) {
        pdf.text(x, y, line);
        line = words[i] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
  
    pdf.text(x, y, line);
  }
  const maxWidth = 100; // Adjust this value as needed
const lineHeight = 5;

  return (
    <div>
        <h1 className='text-center'>Create New Invoice</h1>
      <form>
        {/* For Invoices */}
        <div className="row">
            <div className="col-lg-4 d-flex flex-column align-items-center">
      <label htmlFor="invoiceNo">Invoice No:</label>
        <input className='w-50 p-1' type="number" id="invoiceNo" ref={invoiceNoRef} />
        <label htmlFor="invoiceDateRef">Invoice Date:</label>
        <input className='w-50 p-1' type="date" id="invoiceDateRef" ref={invoiceDateRef} />
        <label htmlFor="deliveryDateRef">Delivery Date:</label>
        <input  className='w-50 p-1' type="date" id="deliveryDateRef" ref={deliveryDateRef} />
        <label htmlFor="billToName">Billing Name:</label>
        <input  className='w-50 p-1' type="text" id="billToName" ref={billToName} />
        <label htmlFor="billingAddressRef">Billing Address:</label>
        <input  className='w-50 p-1' type="text" id="billingAddressRef" ref={billingAddressRef} />
        <label htmlFor="shipToName">Shipping Name:</label>
        <input  className='w-50 p-1' type="text" id="shipToName" ref={shipToName} />
        <label htmlFor="deliveryAddressRef">Shipping Address:</label>
        <input  className='w-50 p-1' type="text" id="deliveryAddressRef" ref={deliveryAddressRef} />
         <label htmlFor="orderNo">Order No:</label>
        <input  className='w-50 p-1' type="number" id="orderNo" ref={orderNo} />
        <label htmlFor="salesPerson">Driver Name:</label>
        <input className='w-50 p-1' type="text" id="salesPerson" ref={salesPerson} />
        <label htmlFor="referenceNo">Reference No:</label>
        <input className='w-50 p-1' type="number" id="referenceNo" ref={referenceNo} />
        <label htmlFor="carrier">Carrier:</label>
        <input className='w-50 p-1' type="text" id="carrier" ref={carrier} />
        <label htmlFor="poNo">PO No:</label>
        <input className='w-50 p-1' type="number" id="poNo" ref={poNo} />
        </div>
        <div className="col-lg-4 d-flex flex-column align-items-center">
        <label htmlFor="description1">Description1:</label>
        <input className='w-50 p-1' type="text" id="description1" ref={description1} /> 
        <label htmlFor="bol1">Bol1:</label>
        <input className='w-50 p-1' type="text" id="bol1" ref={bol1} />
        <label htmlFor="units1">Units1:</label>
        <input className='w-50 p-1' type="number" id="units1" ref={units1} />
        <label htmlFor="unitPrice1">UnitPrice1:</label>
        <input className='w-50 p-1' type="number" id="unitPrice1" ref={unitPrice1} />
        <label htmlFor="description2">Description2:</label>
        <input className='w-50 p-1' type="text" id="description2" ref={description2} /> 
        <label htmlFor="bol2">Bol2:</label>
        <input className='w-50 p-1' type="text" id="bol2" ref={bol2} />
        <label htmlFor="units2">Units2:</label>
        <input className='w-50 p-1' type="number" id="units2" ref={units2} />
        <label htmlFor="unitPrice2">UnitPrice2:</label>
        <input className='w-50 p-1'type="number" id="unitPrice2" ref={unitPrice2} /> 
        <label htmlFor="description3">Description3:</label>
        <input className='w-50 p-1' type="text" id="description3" ref={description3} /> 
        <label htmlFor="bol3">Bol3:</label>
        <input className='w-50 p-1' type="text" id="bol3" ref={bol3} />
        <label htmlFor="units3">Units3:</label>
        <input className='w-50 p-1' type="number" id="units3" ref={units3} />
        <label htmlFor="unitPrice3">UnitPrice3:</label>
        <input className='w-50 p-1'type="number" id="unitPrice3" ref={unitPrice3} /> 
        <label htmlFor="description4">Description4:</label>
        <input className='w-50 p-1' type="text" id="description4" ref={description4} /> 
        <label htmlFor="bol4">Bol4:</label>
        <input className='w-50 p-1' type="text" id="bol4" ref={bol4} />
        <label htmlFor="units3">Units4:</label>
        <input className='w-50 p-1' type="number" id="units4" ref={units4} />
        <label htmlFor="unitPrice4">UnitPrice4:</label>
        <input className='w-50 p-1'type="number" id="unitPrice4" ref={unitPrice4} /> 
        </div>
        <div className="col-lg-4 d-flex flex-column align-items-center">
        <label htmlFor="freightName1">FreightName1:</label>
        <input className='w-50 p-1' type="text" id="freightName1" ref={freightName1} /> 
        <label htmlFor="freightUnits1">FreightUnit1:</label>
        <input className='w-50 p-1' type="number" id="freightUnits1" ref={freightUnits1} /> 
        <label htmlFor="freightPrice1">FreightPrice1:</label>
        <input className='w-50 p-1' type="number" id="freightPrice1" ref={freightPrice1} /> 
        <label htmlFor="freightName2">FreightName2:</label>
        <input className='w-50 p-1' type="text" id="freightName2" ref={freightName2} /> 
        <label htmlFor="freightUnits2">FreightUnit2:</label>
        <input className='w-50 p-1' type="number" id="freightUnits2" ref={freightUnits2} /> 
        <label htmlFor="freightPrice2">FreightPrice2:</label>
        <input className='w-50 p-1' type="number" id="freightPrice2" ref={freightPrice2} />
        <label htmlFor="freightName3">FreightName3:</label>
        <input className='w-50 p-1' type="text" id="freightName3" ref={freightName3} /> 
        <label htmlFor="freightUnits3">FreightUnit3:</label>
        <input className='w-50 p-1' type="number" id="freightUnits3" ref={freightUnits3} /> 
        <label htmlFor="freightPrice3">FreightPrice3:</label>
        <input className='w-50 p-1' type="number" id="freightPrice3" ref={freightPrice3} />
        <label htmlFor="freightName4">FreightName4:</label>
        <input className='w-50 p-1' type="text" id="freightName4" ref={freightName4} /> 
        <label htmlFor="freightUnits4">FreightUnit4:</label>
        <input className='w-50 p-1' type="number" id="freightUnits4" ref={freightUnits4} /> 
        <label htmlFor="freightPrice4">FreightPrice4:</label>
        <input className='w-50 p-1' type="number" id="freightPrice4" ref={freightPrice4} />
        </div>
        </div>
        {/* Add more form fields here */}
      </form>
      <div className="d-flex justify-content-center align-items-start mt-4" style={{ height: '100vh' }}>
      <button className='btn btn-primary' onClick={generatePDF}>Generate PDF</button>
    </div>
    </div>
  );
}

export default FormToPDF;
