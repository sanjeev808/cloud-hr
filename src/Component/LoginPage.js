import { NavLink } from "react-router-dom";
import "../CssFiles/file.css";
import emailLogo from "../images/email.svg";
import passwordLogo from "../images/password.svg";
import data from "../data/jsonFiles.json";
export default function LoginPage() {
  const SubmitBtn = (e) => {
    e.preventDefault();
    console.log("Button Clicked");
  };
  return (
    <div className=" overflow-hidden position-relative">
      <div className=" overflow-hidden">
        <img className="logincover" />
      </div>
      <div className="h-s-100 justify-content-md-center d-flex align-items-center">
        <div className="card d-flex h-60 w-50 text-center Larger shadow-custom-1 br-radius-10">
          <div className="card-body">
            <form onSubmit={SubmitBtn}>
              <div>
                <p className="logo-gradient text-center text-uppercase">
                  {data.name}
                </p>
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <div className="emailstyle">
                  <img
                    src={emailLogo}
                    alt="Email Svg"
                    className="emaillogo p-absolute p-left-4"
                  />
                </div>
                <input
                  type="email"
                  className="form-control w-75 p-left-2"
                  style={{ paddingLeft: "30px" }}
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  minLength={8}
                  maxLength={30}
                  autoComplete="true"
                  required
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <div className="emailstyle">
                  <img
                    src={passwordLogo}
                    alt="Email Svg"
                    className="emaillogo p-absolute p-left-4"
                  />
                </div>
                <input
                  type="password"
                  className="form-control w-75"
                  style={{ paddingLeft: "30px" }}
                  aria-describedby="PasswordHelp"
                  placeholder="Password"
                  minLength={8}
                  maxLength={16}
                  autoComplete="true"
                  required
                />
              </div>
              <button className="btn btn-primary mt-2 w-25">Login</button>
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
  );
}
