import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App.jsx";
// const anotherElem = (
//   <a href="https://www.google.com" target="_blank">
//     Google
//   </a>
// );
const anotherElem = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Vist Google"
);
createRoot(document.getElementById("root")).render(anotherElem);
