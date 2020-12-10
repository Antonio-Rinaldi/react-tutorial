import React from "react";
import ErrorComponent from "./ErrorComponent";
import ErrorBoundary from "./ErrorBoundary";

export default function N9() {
    return (
        <div>
            <h3>Error Boundaries</h3>
            <ErrorBoundary>
                <ErrorComponent willThrowError={false}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <ErrorComponent willThrowError={true}/>
            </ErrorBoundary>
        </div>
    );
}
