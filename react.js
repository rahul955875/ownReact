
 function createElement(type, props, ...children) {
        const reactElemnt = {
          type,
          props : {...props, children}
        }
        if(children.length) {
          reactElemnt.props.children = children
        }
        return reactElemnt
    }

export default {
    createElement
} 