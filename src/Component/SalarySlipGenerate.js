import { jsPDF } from "jspdf";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
export default function SalarySlipGenerate() {
  const printRef = React.useRef();
  let EmpID = "404";
  let EmpName = "Ankit Kumar";
  let BankName = "ICICI";
  let bankAccountNumber = "12121212121";
  let EmpEmail = "ankit@gmail.com";
  let EmpRole = "Manager";
  let WorkedDays = 20;
  const printPDF = async () => {
    const divToDisplay = printRef.current;
    const doc = new jsPDF();
    html2canvas(divToDisplay, {
      letterRendering: true,
      quality: 4,
      scale: 2,
      dpi: 144,
      useCORS: true,
      allowTaint: true,
    }).then(function (canvas) {
      const divImage = canvas.toDataURL("image/PNG", 1);
      const pdf = new jsPDF({
        orientation: "portrait",
        format: "a4",
      });
      const imgProperties = pdf.getImageProperties(divImage);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      // let ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
      pdf.addImage(divImage, "PNG", 5, 20, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="px-3">
        Salary Slip Generate
        <div className="d-flex">
          <div>Compaany Logo</div>
          <div>
            <span>Compaany Logo1</span>
            <span>PaySlip for the year</span>
          </div>
        </div>
        <div ref={printRef} className="text-uppercase">
          <table className="table table-Danger table-striped px-4 border-primary">
            <thead>
              <tr>
                <th colSpan="4">Cloud HR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4" className="text-center h5">
                  PaySlip for March 2022
                </td>
              </tr>
              <tr>
                <td className="h5">Employee ID:</td>
                <td>{EmpID}</td>
                <td className="h5">Employee Name:</td>
                <td>{EmpName}</td>
              </tr>
              <tr>
                <td className="h5">Employee Email:</td>
                <td>{EmpEmail}</td>
                <td className="h5">Role:</td>
                <td>{EmpRole}</td>
              </tr>
              <tr>
                <td className="h5">Mobile Number:</td>
                <td>121211121211121</td>
              </tr>
              <tr>
                <td className="h5">Location:</td>
                <td>Chandigarh</td>
                <td className="h5">Department:</td>
                <td>React Js</td>
              </tr>
              <tr>
                <td className="h5">Bank Name:</td>
                <td>{BankName}</td>
                <td className="h5">Bank Account No:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">Total Days:</td>
                <td>{WorkedDays}</td>
                <td className="h5">PF No:</td>
                <td>{WorkedDays}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-Danger table-striped px-5 border-primary">
            <thead>
              <tr className="h5">
                <th>Earnings:</th>
                <th>Amount in Rs:</th>
                <th>Deductions</th>
                <th>Amount in Rs:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="h5">Basic:</td>
                <td>{bankAccountNumber}</td>
                <td className="h5">Provident Fund:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">House Rent Allowance:</td>
                <td>{bankAccountNumber}</td>
                <td className="h5">Professional Tax:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">Special Allowance:</td>
                <td>{BankName}</td>
                <td className="h5">Income Tax:</td>
                <td>{bankAccountNumber}</td>
              </tr>
              <tr>
                <td className="h5">Convneyance:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td className="h5">Additional Special Allowance:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td className="h5">OnCall/Shift Allowance:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td className="h5">Gross Earning:</td>
                <td>{WorkedDays}</td>
                <td className="h5">Gross Earning:</td>
                <td>{WorkedDays}</td>
              </tr>
              <tr>
                <td colSpan="2">Net Pay</td>
                <td colSpan="2">Salary</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={printPDF}>Generate Salary Slip</button>
      </div>
    </>
  );
}
