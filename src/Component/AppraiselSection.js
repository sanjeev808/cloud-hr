import { useEffect, useState } from "react";
import AppraiselLetterGenerate from "./LetterGenerate";
export default function AppraiselSection() {
  const initialValue = {
    empName: "Ankit Kumar",
    empSubject: "Appraisel Letter For Developer",
    empSalaryHike: "40",
    hrName: "ABC",
    hrPosition: "Assistant Manager",
    pdfDate: "",
    refNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [imageValues, setImageValues] = useState("");
  const [showPDF, setShowPDF] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleImage = (e) => {
    setImageValues(URL.createObjectURL(e.target.files[0]));
    console.log(imageValues);
  };
  console.log(imageValues);

  //   useEffect(() => {
  //     console.log(formValues);
  //   }, [formValues]);
  return (
    <div className="pdf-background">
      <div className="text-center h3 py-1 ">
        <p>Appraisal Letter Generation Section</p>
      </div>
      <div className="px-5 d-flex">
        <div>
          <div className="d-flex flex-column">
            <div className="h4 py-1">Enter the Following Details</div>
            <div className="px-3">
              <div className="py-4 h6">Reference number</div>
              <input
                type="text"
                name="refNumber"
                value={formValues.refNumber}
                onChange={handleChange}
                maxLength="20"
                placeholder="Enter the Reference number"
                className="form-control"
                required
              />
              <div className="py-4 h6">Name of the Employee</div>
              <input
                type="text"
                name="empName"
                value={formValues.empName}
                onChange={handleChange}
                placeholder="Enter the Employee Name"
                className="form-control"
                required
              />
              <div className="py-4 h6">Subject Of the PDf</div>
              <input
                type="text"
                name="empSubject"
                value={formValues.empSubject}
                onChange={handleChange}
                placeholder="Enter the Subject of the pdf"
                className="form-control"
                required
              />
              <div className="py-4 h6">Date of the Letter</div>
              <input
                type="date"
                name="pdfDate"
                className="form-control"
                value={formValues.pdfDate}
                onChange={handleChange}
                required
              />
              <div className="py-4 h6">Salary Hike</div>
              <input
                type="text"
                name="empSalaryHike"
                value={formValues.empSalaryHike}
                onChange={handleChange}
                placeholder="Enter the Salary Hike"
                className="form-control"
                required
                maxLength={"10"}
              />
              <div className="py-4 h6">HR Name</div>
              <input
                type="text"
                name="hrName"
                value={formValues.hrName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter the HR Name"
                required
              />
              <div className="py-4 h6">HR position</div>
              <input
                type="text"
                name="hrPosition"
                value={formValues.hrPosition}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter the HR Position"
                required
              />
              <div className="py-3 h6">Upload the Signature of the HR</div>
              <input
                type="file"
                name="signatureImg"
                accept="image/*"
                className="py-5"
                onChange={handleImage}
                required
              />
            </div>
          </div>
        </div>
        <div>
          <AppraiselLetterGenerate data={formValues} imgData={imageValues} />
        </div>
      </div>
    </div>
  );
}
