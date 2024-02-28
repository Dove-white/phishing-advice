import React from "react";
import { Route, Routes } from "react-router-dom";
import BadNews from "./component/page/app/BadNews";
import FirstAdvice from "./component/page/app/FirstAdvice";
import SecondAdvice from "./component/page/app/SecondAdvice";
import ThirdAdvice from "./component/page/app/ThirdAdvice";
import FourthAdvice from "./component/page/app/FourthAdvice";
import FifthAdvice from "./component/page/app/FifthAdvice";
import SixthAdvice from "./component/page/app/SixthAdvice";
import LastAdvice from "./component/page/app/LastAdvice";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/phishing-advice/" element={<BadNews />} />
        <Route path="/phishing-advice/first-advice" element={<FirstAdvice />} />
        <Route path="/phishing-advice/second-advice" element={<SecondAdvice />} />
        <Route path="/phishing-advice/third-advice" element={<ThirdAdvice />} />
        <Route path="/phishing-advice/fourth-advice" element={<FourthAdvice />} />
        <Route path="/phishing-advice/fifth-advice" element={<FifthAdvice />} />
        <Route path="/phishing-advice/sixth-advice" element={<SixthAdvice />} />
        <Route path="/phishing-advice/last-advice" element={<LastAdvice />} />
      </Routes>
    </div>
  );
};

export default App;
