import React from "react";

let greeting;
let customStyle = {
  color: ""
};

function Heading() {
  return (
    <h1 style={customStyle} className="heading">
      {greeting} {new Date().toLocaleTimeString()}
    </h1>
  );
}

function CheckTime() {
  if (
    new Date().toLocaleTimeString() >= "11:59:59 AM" && new Date().toLocaleTimeString() >= "11:59:59 PM"
  ) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (
    new Date().toLocaleTimeString() >= "12:00:00 PM" && new Date().toLocaleTimeString() <= "6:00:00 PM"
  ) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }
}
CheckTime();

export default Heading;
