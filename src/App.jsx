import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./component/page/app";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/phishing-advice/" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default App;
