import React from "react";

export default React.forwardRef(function ForwardedRef(props, forwardedRef) {
        return (
            <div>
                <h6>Forwarded Ref</h6>
                <p ref={forwardedRef}>Error in forwarding ref</p>
            </div>
        );
    }
)
