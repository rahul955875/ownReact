
 function createElement(type, props, ...children) {
        const reactElemnt = {
          type,
          props : {...props, children}
        }
        return reactElemnt
    }

export default {
    createElement
} 