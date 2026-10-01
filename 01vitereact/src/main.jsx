import React, { StrictMode, createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);

const anotherUser = "AS"

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser,
);

createRoot(document.getElementById("root")).render(
  reactElement
);
