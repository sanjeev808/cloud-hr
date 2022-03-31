import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Forgotpassword from "../Component/ForgotPassword";
import NoPage from "../Component/Nopage";
import AppraiselSection from "../Component/AppraiselSection";
import SalarySlipGenerate from "../Component/SalarySlipGenerate";
export default function RouterFiles() {
  return (
    // Navigation Router Files
    <BrowserRouter>
      <Routes>
        {/* Navigation Path */}
        <Route path="/" element={<App />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
        <Route path="/ForgotPassword" element={<Forgotpassword />} />
        <Route path="/Appraisel" element={<AppraiselSection />} />

        <Route path="/SalarySlipGenerate" element={<SalarySlipGenerate />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
