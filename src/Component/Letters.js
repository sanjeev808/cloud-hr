import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import companyLogo from "../images/company-logo.jpg";
import "../CssFiles/file.css";
import data from "../data/letterformat.json";
import React from "react";
export default function Letters(props) {
  const printRef = React.useRef();
  const reader = new FileReader();
  const reader1 = reader.readAsDataURL(props.imgData);
  console.log(reader1);
  const printPDF = async () => {
    const divToDisplay = printRef.current;
    const doc = new jsPDF();
    html2canvas(divToDisplay, {
      letterRendering: true,
      quality: 4,
      scale: 1,
      useCORS: true,
      allowTaint: true,
    }).then(function (canvas) {
      const divImage = canvas.toDataURL("image/JPEG", 1);
      const pdf = new jsPDF({
        orientation: "portrait",
        format: "a4",
      });
      const imgProperties = pdf.getImageProperties(divImage);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      // let ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
      pdf.addImage(divImage, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <button id="print" onClick={printPDF}>
        Download As PDF
      </button>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <div ref={printRef} className="pdFile">
          <div className="mx-5 py-5 ">
            <div className="px-5">
              <div className="px-5 pdf-line-below t-content">
                <div className="text-capitalize">
                  <div className="d-flex  justify-content-between">
                    <img src={companyLogo} className="companyLogo" />
                    <div className="py-4">{data.companyAddress}</div>
                  </div>
                  <div className="d-flex  justify-content-between py-5">
                    <span>Ref:{data.ref}</span>
                    <span>Date:{props.data.pdfDate}</span>
                  </div>
                  <div>Mr.{props.data.empName}</div>
                  <div className="h2 text-center text-decoration-underline py-5">
                    Subject: {props.data.empSubject}
                  </div>
                  <div className="py-2 ">Dear {props.data.empName},</div>
                </div>
                <div>
                  <div className="py-4">{data.content1}</div>
                  <div className="py-4">{data.content2}</div>
                </div>
                <div className="py-4 ">
                  <p>Yours Faithfully,</p>
                  <br />
                  <p>For Seasia Infotech Pvt Ltd</p>
                  <br />
                  <span>{reader1}</span>
                  <br />
                  <span>{props.data.hrName}</span>
                  <br />
                  <span>{props.data.hrPosition}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
