import React from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Page from "./Page";

export default function N16() {
    return (
        <div>
            <h3>Redux Pattern</h3>
            <Provider store={store}>
                <Page/>
            </Provider>
        </div>
    )
}
