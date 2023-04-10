import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { useEffect } from "react";

function Popup() {
  useEffect(() => {
    chrome.runtime.sendMessage(
      { msg: "Hello from popup.js" },
      function (response) {
        console.log("from background.js", response);
      }
    );
  });
  return (
    <div>
      <h1>Popup.js</h1>
      <p>This is a simple popup</p>
    </div>
  );
}

const target = document.getElementById("react-target");
const root = ReactDOMClient.createRoot(target);

root.render(<Popup />);
