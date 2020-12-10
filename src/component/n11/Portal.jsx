import ReactDOM from "react-dom";

export default function Portal({divClassName, children}) {
    return ReactDOM.createPortal(children, document.getElementById(divClassName));
}
