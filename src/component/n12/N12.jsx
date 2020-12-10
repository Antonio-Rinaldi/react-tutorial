import React from "react";
import Parent from "./Parent";

/*
    Memo: A memo component only gets re-rendered if there's a difference in the shallow comparison of props and/or state.
    useCallback: Hook used to cache a function, and avoid recreating the function id not needed. You can express an array of dependencies that will be checked to re-create the function.
    useMemo: Hook used to cache the return value of a function, to avoid repeated execution of slow functions when not needed. You can express an array of dependencies that will be checked to re-execute the function.
*/
export default function N12() {
    return (
        <div>
            <h3>Performance - Memo, useCallback, useMemo</h3>
            <Parent/>
        </div>
    )
}
