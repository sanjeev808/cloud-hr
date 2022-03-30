import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../CssFiles/file.css";
import closeBtn from "../images/close.svg";
import data from "../data/jsonFiles.json";

export default function Forgotpassword() {
  const [forgotValue, setForgotValue] = useState([]);
  const [formErrors, setFormErrors] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const HandleChange = (e) => {
    setForgotValue(e.target.value);
    // console.log(forgotValue)
  };
  const SubmitBtn = (e) => {
    e.preventDefault();
    setFormErrors(validate(forgotValue));
    console.log(formErrors);
    setIsSubmit(true);
  };
  const validate = (x) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let errors = "";
    if (!regex.test(x)) {
      console.log("Please Enter Valid Email");
      errors = "Please Enter Valid Email";
    }
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (!formErrors && isSubmit) {
      console.log(isSubmit);
    }
  }, [formErrors]);
  return (
    <div className="w-100 h-s-100 justify-content-md-center d-flex align-items-center bg-none">
      <div className="w-50 bg-light br-radius-10 h-75">
        <div className="mx-4 my-4">
          <div>
            <NavLink to="/">
              <img
                src={closeBtn}
                alt="closeBtn"
                className="p-left-4 closebtn"
              />
            </NavLink>
          </div>
          <p className="h2 mx-2 py-4">Enter your {data.name} Email ID</p>
          <p className="mx-2 h5 text-danger">
            {formErrors ? <>{formErrors}</> : null}
          </p>
          <div className="w-50 mx-2">
            <form onSubmit={SubmitBtn}>
              <input
                type="text"
                className="form-control "
                name="forgotEmail"
                // style={{ paddingLeft: "30px" }}
                aria-describedby="Email Address Help"
                placeholder="Enter your Email Address"
                minLength={8}
                maxLength={16}
                value={forgotValue}
                onChange={HandleChange}
                required
              />
              <div className="my-4">
                <button className="btn btn-primary mt-2 w-25 ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
