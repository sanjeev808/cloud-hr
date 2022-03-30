import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import companyLogo from "../images/company-logo.jpg";
import "../CssFiles/file.css";
import data from "../data/letterformat.json";
export default function Letters() {
  // let companyAddress = `Plot C 136 Phase 8, Industrial Area, Mohali 160071`;
  // let refNumber = "AK/OFF/01";
  // let letterContent = data.content1;
  // console.log(data.content1);
  const printPDF = () => {
    const doc = new jsPDF();
    const divToDisplay = document.getElementById("pdf-file");
    html2canvas(divToDisplay, {
      letterRendering: true,
      quality: 4,
      scale: 0.73,
      useCORS: true,
      allowTaint: true,
    }).then(function (canvas) {
      const divImage = canvas.toDataURL("image/JPEG", 1.5);
      const pdf = new jsPDF({
        orientation: "portrait",
        format: "a4",
      });

      let width = doc.internal.pageSize.getWidth();
      let height = doc.internal.pageSize.getHeight();
      let widthRatio = width / canvas.width;
      let heightRatio = height / canvas.height;
      let HRatio = 0.19;
      let Ratio = 0.3;
      // let ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
      pdf.addImage(divImage, "JPEG", -20, 40, 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <button id="print" onClick={printPDF}>
        PRINT
      </button>
      <div id="pdf-file">
        <div className="mx-5 py-5 h4">
          <div className="px-5">
            <div className="px-5 pdf-line-below t-content">
              <div className="text-capitalize">
                <div className="d-flex  justify-content-between">
                  <img src={companyLogo} className="companyLogo" />
                  <div>{data.companyAddress}</div>
                </div>
                <div className="d-flex  justify-content-between py-4">
                  <span>Ref:{data.ref}</span>
                  <span>Date:March 30,2022</span>
                </div>
                <div>Mr.{data.personto}</div>
                <div className="h2 text-center text-decoration-underline py-4">
                  Subject: {data.subject} for {data.designation}
                </div>
                <div className="py-2 ">Dear {data.personto},</div>
              </div>
              <div>
                <div className="py-1">{data.content1}</div>
                <div className="py-1">{data.content2}</div>
              </div>
              <div className="py-1">
                <p>Yours Faithfully,</p>
                <br />
                <p>For Seasia Infotech Pvt Ltd</p>
                <br />
                <span>sign</span>
                <br />
                <span>{data.personFrom}</span>
                <br />
                <span>{data.personFromPosition}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
