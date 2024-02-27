import React from "react";
import { Route, Routes } from "react-router-dom";
import BadNews from "./component/page/app/BadNews";
import FirstAdvice from "./component/page/app/FirstAdvice";
import SecondAdvice from "./component/page/app/SecondAdvice";
import ThirdAdvice from "./component/page/app/ThirdAdvice";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/phishing-advice/" element={<BadNews />} />
        <Route path="/phishing-advice/first-advice" element={<FirstAdvice />} />
        <Route path="/phishing-advice/second-advice" element={<SecondAdvice />} />
        <Route path="/phishing-advice/third-advice" element={<ThirdAdvice />} />
      </Routes>
    </div>
  );
};

export default App;
