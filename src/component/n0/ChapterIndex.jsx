import React from "react";
import "./css/chapterIndex.css"
import {useHistory} from "react-router-dom";

export default function ChapterIndex() {

    const history = useHistory();
    return (
        <nav>
            <h2>React</h2>
            <ul className="ul">
                <li><button id="component-types" className="link" onClick={navigateToUrl}>1.Class And Functional Components</button></li>
                <li><button id="component-state" className="link" onClick={navigateToUrl}>2.Component State</button></li>
                <li><button id="parent-child-communication" className="link" onClick={navigateToUrl}>3.Parent - Child Communication</button></li>
                <li><button id="structure-rendering" className="link" onClick={navigateToUrl}>4.Conditional And Lists Rendering</button></li>
                <li><button id="basic-forms" className="link" onClick={navigateToUrl}>5.Basic Form</button></li>
                <li><button id="side-effects" className="link" onClick={navigateToUrl}>6.Side Effects</button></li>
                <li><button id="css" className="link" onClick={navigateToUrl}>7.Css and Styles</button></li>
                <li><button id="refs" className="link" onClick={navigateToUrl}>8.Refs</button></li>
                <li><button id="error-boundaries" className="link" onClick={navigateToUrl}>9.Error Boundaries</button></li>
                <li><button id="context" className="link" onClick={navigateToUrl}>10.Context</button></li>
                <li><button id="portals" className="link" onClick={navigateToUrl}>11.Portals</button></li>
                <li><button id="performance" className="link" onClick={navigateToUrl}>12.Performance - Memo, useCallback, useMemo</button></li>
                <li><button id="reducers" className="link" onClick={navigateToUrl}>13.Complex State Management - useReducer</button></li>
                <li><button id="custom-hooks" className="link" onClick={navigateToUrl}>14.Custom Hooks</button></li>
                <li><button id="http-requests" className="link" onClick={navigateToUrl}>15.Http Requests</button></li>
                <li><button id="redux-pattern" className="link" onClick={navigateToUrl}>16.Redux Pattern</button></li>
            </ul>
        </nav>
    )

    function navigateToUrl(event) {
        history.push(`/${event.target.id}`);
    }
}

