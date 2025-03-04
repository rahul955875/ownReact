import React from "./react";

const reactDomEleemnt = (element)=>{
  const {type,props} = element
  const DOMElement = document.createElement(type)
  const textNode = document.createTextNode(props.children.join(''))
  DOMElement.append(textNode)
  console.log(props.children)
  if(props.children.type){
    reactDomEleemnt(props.children)
  }
  return DOMElement

}
function render(reactElement,root){
 document.getElementById(root).append(reactDomEleemnt(reactElement))
}
const h1 = <h1>hello world {'asdf'}</h1>;
console.log(<h1>alkf<b>asldf</b></h1>);

// render(h1,'root')
render(<h1>alkf<b>asldf</b></h1>,'root')