import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import companyLogo from "../images/company-logo.jpg";
import "../CssFiles/file.css";
export default function Letters() {
  let companyAddress = `Plot C 136 Phase 8, Industrial Area, Mohali 160071`;
  let refNumber = "AK/OFF/01";
  let name = "Mr. Ankit Kumar";
  const doc = new jsPDF();
  const divToDisplay = document.getElementById("root");
  html2canvas(divToDisplay).then(function (canvas) {
    // const divImage = canvas.toDataURL("image/png");
    // const pdf = new jsPDF();
    // pdf.addImage(divImage, "jpeg", 0, 0);
    // pdf.save("download.pdf");
  });
  return (
    <div>
      <div className="mx-5 my-5">
        <div className="mx-5">
          <div className="mx-5">
            <div className="d-flex justify-content-between  my-5">
              <img src={companyLogo} className="companyLogo" />

              <span className="w-25 text-break">{companyAddress}</span>
            </div>
            <div className="d-flex justify-content-between  my-3">
              <span>
                Ref No:<span>{refNumber}</span>
              </span>
              <span>Date: December 27, 2021 </span>
            </div>
            <div className="h5">{name}</div>
            <div className="text-decoration-underline h5 text-center mx-2">
              <span>Subject: </span>Job Offer Letter for Trainee - Software
              Developer
            </div>
            <div>Dear Ankit Kumar,</div>
          </div>
        </div>
      </div>
    </div>
  );
}
