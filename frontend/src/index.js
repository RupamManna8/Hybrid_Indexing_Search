import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import BuyingPage from "./Pages/buyingPage/buyNow";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BuyingPage/>
  </React.StrictMode>
);

reportWebVitals();
