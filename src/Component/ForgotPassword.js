import { NavLink } from "react-router-dom";
import "../CssFiles/file.css";
import closeBtn from "../images/close.svg";
import data from "../data/jsonFiles.json";
export default function Forgotpassword() {
  const SubmitBtn = (e) => {
    e.preventDefault();
    console.log("Button Clicked");
  };
  return (
    <div className="w-100 h-s-100 justify-content-md-center d-flex align-items-center bg-none">
      <div className="w-50 bg-light br-radius-10 h-75">
        <div className="mx-4 my-4">
          <div>
            <NavLink to="/">
              <img src={closeBtn} alt="closeBtn" className="p-left-4" />
            </NavLink>
          </div>
          <p>Enter your {data.name} Email ID</p>
          <div className="w-50">
            <form onSubmit={SubmitBtn}>
              <input
                type="text"
                className="form-control w-75"
                style={{ paddingLeft: "30px" }}
                aria-describedby="Email Address Help"
                placeholder="Enter your Email Address"
                minLength={8}
                maxLength={16}
                autoComplete="true"
                required
              />

              <button className="btn btn-primary mt-2 w-25">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
