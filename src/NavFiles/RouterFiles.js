import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Forgotpassword from "../Component/ForgotPassword";
import NoPage from "../Component/Nopage";
import Letters from "../Component/Letters";
import AppraiselSection from "../Component/AppraiselSection";
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
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
