import { useEffect, useState } from "react";
import Letters from "./Letters";
export default function AppraiselSection() {
  const initialValue = {
    empName: "Ankit Kumar",
    empSubject: "Appraisel Letter For Developer",
    empSalaryHike: "40",
    hrName: "ABC",
    hrPosition: "Assistant Manager",
    pdfDate: "",
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
    <div className="py-2 px-5">
      <div className="d-flex flex-column">
        <p>Enter the Following Details to Generate the PDF</p>
        <div>
          <span>Name of the Employee</span>
          <input
            type="text"
            name="empName"
            value={formValues.empName}
            onChange={handleChange}
            placeholder="Enter the Employee Name"
          />
        </div>
        <div>
          <span>Subject Of the PDf</span>
          <input
            type="text"
            name="empSubject"
            value={formValues.empSubject}
            onChange={handleChange}
            placeholder="Enter the Subject of the pdf"
          />
        </div>
        <div>
          <span>Salary Hike</span>
          <input
            type="text"
            name="empSalaryHike"
            value={formValues.empSalaryHike}
            onChange={handleChange}
            placeholder="Enter the Salary Hike"
          />
        </div>
        <div>
          <span>HR Name</span>
          <input
            type="text"
            name="hrName"
            value={formValues.hrName}
            onChange={handleChange}
            placeholder="Enter the HR Name"
          />
        </div>
        <div>
          <span>HR position</span>
          <input
            type="text"
            name="hrPosition"
            value={formValues.hrPosition}
            onChange={handleChange}
            placeholder="Enter the HR Position"
          />
        </div>
        <div>
          <span>Date of the Letter</span>
          <input
            type="date"
            name="pdfDate"
            value={formValues.pdfDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="signatureImg"
            accept="image/*"
            // value={imageValues}
            onChange={handleImage}
          />
        </div>
      </div>
      <button onClick={() => setShowPDF(true)}>
        Click Here to preview the PDF{" "}
      </button>
      {showPDF ? <Letters data={formValues} imgData={imageValues} /> : null}
    </div>
  );
}
