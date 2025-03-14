export function render(reactElement, rootElement) {
  function createDomElement(reactElement) {
    if (typeof reactElement.type === "function") {
      return createDomElement(reactElement.type(reactElement.props));
    }
    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => {
        if (typeof el === "object") {
          //   console.log(el);
          return createDomElement(el);
        }
      });
    }
    if (typeof reactElement === "string") {
      // return textNode = document.createTextNode(reactElement)
      return reactElement;
    }
    const { type, props } = reactElement;
    const DOMElement = document.createElement(type);
    Object.entries(props).forEach(([key, value]) => {
      DOMElement[key] = value;
    });
    props.children?.forEach((child) => {
      if (Array.isArray(child)) {
        
        DOMElement.append(...child.map((el) => createDomElement(el)));
      } else if (typeof child.type === "string") {
        
        DOMElement.append(createDomElement(child));
        //   console.log(createDomElement(child));
      } else {
        // const TextNode = document.createTextNode(child)
        // DOMElement.append(createTextNode)
        DOMElement.textContent += child;
      }
    });

    return DOMElement;
  }
  const DOMElement = createDomElement(reactElement);
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}
