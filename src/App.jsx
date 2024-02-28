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
        <Route path="/" element={<BadNews />} />
        <Route path="/first-advice" element={<FirstAdvice />} />
        <Route path="/second-advice" element={<SecondAdvice />} />
        <Route path="/third-advice" element={<ThirdAdvice />} />
        <Route path="/fourth-advice" element={<FourthAdvice />} />
        <Route path="/fifth-advice" element={<FifthAdvice />} />
        <Route path="/sixth-advice" element={<SixthAdvice />} />
        <Route path="/last-advice" element={<LastAdvice />} />
      </Routes>
    </div>
  );
};

export default App;
