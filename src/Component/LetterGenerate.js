import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import companyLogo from "../images/company-logo.jpg";
import "../CssFiles/file.css";
import data from "../data/letterformat.json";
import React from "react";
export default function AppraiselLetterGenerate(props) {
  const printRef = React.useRef();
  let date = props.data.pdfDate;
  //let date = props.date.pdfDate;
  function reverseString(s) {
    let x = s.split("-").join(",");
    console.log(x);
    const date = new Date(Date(x));
    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
  }
  // console.log(reverseString(date));
  // date = new Date(2020, 11, 20);

  // console.log(
  //   new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date)
  // );
  // console.log(new Date().format(date));
  // function reverseString(s) {
  //   return s.split("-").reverse().join("-");
  // }
  // reverseString(date);
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
      pdf.addImage(divImage, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <div className="py-2">
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <div ref={printRef} className="pdFile">
          <div>
            <div>
              <div className="px-4 pdf-line-below t-content">
                <div className="text-capitalize">
                  <div className="d-flex  justify-content-between">
                    <div>
                      <img src={companyLogo} className="companyLogo" />
                    </div>
                    <div className="py-2 h-50 w-50 text-break">
                      {data.companyAddress}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-5 ">
                    <span className="w-50 text-break">
                      Ref:{props.data.refNumber}
                    </span>
                    <span className="d-flex">Date: {reverseString(date)}</span>
                  </div>
                  <div className="w-50 text-break">{props.data.empName}</div>
                  <div className="h2 text-center text-decoration-underline py-5 text-break">
                    Subject: {props.data.empSubject}
                  </div>
                  <div className="py-2 w-50 text-break">
                    Dear {props.data.empName},
                  </div>
                </div>
                <div>
                  <div className="py-4">
                    {data.content1}&nbsp;{props.data.empSalaryHike}
                    &nbsp;{data.content2}
                  </div>
                  <div className="py-4">{data.content3}</div>
                </div>
                <div className="py-3 ">
                  <p>Yours Faithfully,</p>
                  <br />
                  <p>From Seasia Infotech Pvt Ltd</p>
                  <br />
                  <div>
                    <img src={props.imgData} className="img-width" />
                  </div>
                  <br />
                  <span className="w-50 text-break">{props.data.hrName}</span>
                  <br />
                  <span className="w-50 text-break">
                    {props.data.hrPosition}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id="print" onClick={printPDF}>
        Download As PDF
      </button>
    </div>
  );
}
