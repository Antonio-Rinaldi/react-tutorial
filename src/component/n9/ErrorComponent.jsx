import React, {useEffect} from "react";

export default function ErrorComponent({willThrowError}) {

    useEffect(throwError, [willThrowError]);
    return (
        <div>
          <p>Component did not throw any error</p>
        </div>
    );

    function throwError() {
        if(willThrowError) {
            throw new Error("An error has been thrown for test reasons");
        }
    }
}

