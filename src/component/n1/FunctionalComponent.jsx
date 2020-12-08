import React from "react";

export default function FunctionalComponent(props) {

    return (
        <>
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

//----------------------------Arrow Function Syntax-------------------------------
//
// export default FunctionalComponent = props => (
//     <>
//         {/*Some Html*/}
//     </>
// );
