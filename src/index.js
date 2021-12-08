import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/Heading";


function tick() {
  ReactDOM.render(
    <div>
      <Heading> </Heading>
      <hr />
    </div>,
    document.getElementById("root")
  );
}
setInterval(tick, 1000);
