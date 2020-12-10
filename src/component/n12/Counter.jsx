import React from "react";

/*
    A memoized component get re-rendered only when there's difference in the shallow comparison of its props or state.
    That means a memoized component only gets re-rendered if there's a change in the references of its props or state.
 */
export default React.memo(function Counter({name, counter, parity}) {

        console.log(`Rendered counter with name: '${name}'`);
        return (
            <div>
                <p>{name} - {counter} - {parity}</p>
            </div>
        )
    }
)
