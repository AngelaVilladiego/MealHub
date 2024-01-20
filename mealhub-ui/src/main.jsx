import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import DashLayout from "./pages/DashLayout/DashLayout.jsx";
import Overview from "./pages/Overview/Overview.jsx";
import ShoppingList from "./pages/ShoppingList/ShoppingList.jsx";
import DietraryRestrictionList from "./components/PreferenceGroup/DietaryRestrictionList.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<Overview />} />
          <Route path="shoppingList" element={<ShoppingList />} />
        </Route>
        <Route path="dietraryRestrictions" element={<DietraryRestrictionList />}>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
