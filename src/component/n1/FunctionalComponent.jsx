import React from "react";

export default function FunctionalComponent(props) {
    return (
        <>
            <h1>Ciao - {props.a}</h1>
            <h6>Functional Component</h6>
            <p>Property - {props.property}</p>
            {props.children}
        </>
    );
}

//---------------------------Props Destructuring--------------------------------
//
// export default function FunctionalComponent({property, children}) {
//
//     return (
//         <>
//             <p>Property - {property}</p>
//             {children}
//         </>
//     );
// }

const obj = {
    firstName: "erer"
}
const array = [];


console.log(obj?.lastName)
console.log(array?.[0]);
