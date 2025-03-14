import React from "./react";
import { render } from "./react-dom";

const h1 = (
  <h1 className="heading1">
    {"Hello world"} {"fhaks"}
    <div className="namaste">namaste</div>
  </h1>
);
// console.log(h1);
// render(h1, document.getElementById("root"));
function Heading(props) {
  return (
    <h1 className="heading1">
      {"Hello world"} {props.name}
      
      {props.children}
      <div className="namaste">namaste</div>
    </h1>
  );
}
const hello = <Heading />;
render(<Heading name={"rahul"} >hiiii</Heading>, document.getElementById("root"));
