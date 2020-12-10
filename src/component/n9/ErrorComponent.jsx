import React, {useEffect} from "react";

export default function ErrorComponent({willThrowError}) {

    useEffect(throwError, [willThrowError]);
    return (
        <div>
          <p>Error Component</p>
        </div>
    );

    function throwError() {
        if(willThrowError) {
            throw new Error("Error thrown");
        }
    }
}

