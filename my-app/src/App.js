import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RobotsList from "./components/RobotsList";
import messages from "./locales/messages";
import { IntlProvider } from "react-intl";


const language = navigator.language.split(/[-_]/)[0];
const localeMessages = messages[language] || messages["es"];

function App() {
  return (
    <IntlProvider locale={language} messages={localeMessages}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/robots" element={<RobotsList />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;