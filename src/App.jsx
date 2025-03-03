import { HashRouter, Route, Routes } from "react-router-dom";
import Field from "./Components/Field.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RefundPolicy from "./Components/RefundPolicy";
import TermsAndConditions from "./Components/TermsAndConditions";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Field />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
