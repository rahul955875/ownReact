import React from "./react";
import { render } from "./react-dom";

// demo test 1 
// const h1 = (
//   <h1 className="heading1">
//     {"Hello world"} {"fhaks"}
//     <div className="namaste">namaste</div>
//   </h1>
// );
// // console.log(h1);
// // render(h1, document.getElementById("root"));
// function Heading(props) {
//   return (
//     <h1 className="heading1">
//       {"Hello world"} {props.name}
      
//       {props.children}
//       <div className="namaste">namaste</div>
//     </h1>
//   );
// }
// const hello = <Heading />;
// render(<Heading name={"rahul"} >hiiii</Heading>, document.getElementById("root"));


// demo test 2
const container = React.createElement(
  "div",
  { className: "container", id: "container1" },
  [
    React.createElement(
      "section",
      { className: "section1", key: 1 },
      [
        React.createElement(
          "h2",
          { className: "heading", key: 1 },
          "This is heading"
        ),
      ],
      React.createElement("img", {
        key: 2,
        src: "https://tse3.mm.bing.net/th?id=OIP.QdIrCNdF2ZVylABjjes1LAHaGq&pid=Api&P=0&h=180",
        style: { width: "200px", filter: "blur(10px)" },
      })
    ),  React.createElement(
        "section",
        { className: "section1", key: 2 },
        [
          React.createElement(
            "h2",
            { className: "heading", key: 1 },
            "This is heading 2"
          ),
        ],
        React.createElement("img", {
          key: 2,
          src: "https://tse3.mm.bing.net/th?id=OIP.QdIrCNdF2ZVylABjjes1LAHaGq&pid=Api&P=0&h=180",
          style: { width: "200px", filter: "drop-shadow(0 0 15px yellow)" }, className: 'reactImg'
        })
      )
  ]
);
render(container,document.getElementById('root'))

// demo test 3
import './styel.css'
const card = (thumbnail,brand,price,title,i) => {
return(
<div className="card" key={i}>
    <img
      src={thumbnail}
      alt=""
    />
    <div className="card-body">
      <h3>{title}</h3>
      <p>{brand}</p>
      <p>
        <b>${price}</b>
      </p>
    </div>
  </div>)
};
let ProductData = []
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=> {

    ProductData = data.products
    console.log(ProductData)

    render(<div className="container">{ProductData.map((item,i)=>{
        const {thumbnail,brand,price,title} = item
        return card(thumbnail,brand,price,title,i)
    })}</div>, document.getElementById('root'));
});