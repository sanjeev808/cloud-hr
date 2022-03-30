import { NavLink } from "react-router-dom";
import "../CssFiles/file.css";
import emailLogo from "../images/email.svg";
import passwordLogo from "../images/password.svg";
import data from "../data/jsonFiles.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const initialValue = {
    Email: "",
    Password: "",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const token = data.tokenJson;
  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const SubmitBtn = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formErrors);
    setIsSubmit(true);
    console.log("Button Clicked");
  };
  const validate = (x) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x.Email.length < 12) {
      errors.Email = "Please Enter the Valid Email Address more than 12";
    } else if (x.Email.length > 30) {
      errors.Email = "Please Enter the Valid Email Address";
    } else if (!regex.test(x.Email)) {
      // console.log("email address");
      errors.Email = "Please Enter the Valid Email Address";
    }
    if (x.Password.length < 8) {
      errors.Password = "Please Enter the Valid Password more than 8 Length";
    } else if (x.Password.length > 15) {
      errors.Password = "Please Enter the Valid password less than 15 Length";
    }
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (!formErrors && isSubmit) {
      console.log(isSubmit);
    }
  }, [formErrors]);
  useEffect(() => {
    if (token) {
      return navigate("/Letters");
    }
  }, [token]);
  return (
    <>
      <div className=" overflow-hidden position-relative">
        <div className=" overflow-hidden">
          <img className="logincover" />
        </div>
        <div className="h-s-100 justify-content-md-center d-flex align-items-center">
          <div className="card d-flex h-65 w-50 text-center Larger shadow-custom-1 br-radius-10">
            <div className="card-body ">
              <form onSubmit={SubmitBtn}>
                <div>
                  <p className="logo-gradient text-center text-uppercase">
                    {data.name}
                  </p>
                </div>
                <p className="mx-2 h5 text-danger">
                  {!formErrors.Email ? null : <div>{formErrors.Email}</div>}
                </p>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="emailstyle">
                    <img
                      src={emailLogo}
                      alt="Email Svg"
                      className="emaillogo p-absolute p-left-4"
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control w-75 p-left-2"
                    style={{ paddingLeft: "30px" }}
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    minLength={12}
                    maxLength={30}
                    autoComplete="true"
                    name="Email"
                    value={formValues.Email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p className="mx-2 h5 text-danger">
                  {!formErrors.Password ? null : (
                    <div>{formErrors.Password}</div>
                  )}
                </p>
                <div className="mb-3 d-flex justify-content-center">
                  <div className="emailstyle">
                    <img
                      src={passwordLogo}
                      alt="password Svg"
                      className="emaillogo p-absolute p-left-4"
                    />
                  </div>
                  <input
                    type="password"
                    className="form-control w-75"
                    style={{ paddingLeft: "30px" }}
                    aria-describedby="PasswordHelp"
                    placeholder="Password"
                    name="Password"
                    minLength={8}
                    maxLength={16}
                    value={formValues.Password}
                    onChange={handleChange}
                    autoComplete="true"
                    required
                  />
                </div>
                <div className="py-4">
                  <button className="btn btn-primary mt-2 w-25">Login</button>
                </div>
                <div className="">
                  <NavLink
                    to="/Forgotpassword"
                    className="text-muted t-decoration-none"
                  >
                    Forgot Password?
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
