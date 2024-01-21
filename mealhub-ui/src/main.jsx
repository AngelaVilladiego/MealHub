import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import DashLayout from "./pages/DashLayout/DashLayout.jsx";
import Overview from "./pages/Overview/Overview.jsx";
import ShoppingList from "./pages/ShoppingList/ShoppingList.jsx";
import DietraryRestrictionList from "./components/PreferenceGroup/PreferencesQuestionnaire.jsx";
import Questionnaire from "./pages/Questionnaire/Questionnaire.jsx";
import Login from "./pages/Login/SignUp/LoginPage.jsx";
import SignUpPage from "./pages/Login/SignUp/SignUp.jsx";
// import ProfilePage from "./pages/ProfileLayout/ProfilePage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dash/" element={<DashLayout />}>
          <Route index element={<Overview />} />
          {/* <Route index element={<ProfilePage />} /> */}
          <Route path="shoppingList" element={<ShoppingList />} />
        </Route>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signup/questionnaire" element={<Questionnaire />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
