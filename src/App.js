import React from "react";
import './App.css';
import N0 from "./component/n0/N0";
import N1 from "./component/n1/N1";
import N2 from "./component/n2/N2";
import N3 from "./component/n3/N3";
import N4 from "./component/n4/N4";
import N5 from "./component/n5/N5";
import N6 from "./component/n6/N6";
import N7 from "./component/n7/N7";
import N8 from "./component/n8/N8";
import N9 from "./component/n9/N9";
import N10 from "./component/n10/N10";
import N11 from "./component/n11/N11";
import N12 from "./component/n12/N12";
import N13 from "./component/n13/N13";
import N14 from "./component/n14/N14";
import N15 from "./component/n15/N15";
import N16 from "./component/n16/N16";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={N0}/>
                    <Route exact path="/component-types" component={N1}/>
                    <Route exact path="/component-state" component={N2}/>
                    <Route exact path="/parent-child-communication" component={N3}/>
                    <Route exact path="/structure-rendering" component={N4}/>
                    <Route exact path="/basic-forms" component={N5}/>
                    <Route exact path="/side-effects" component={N6}/>
                    <Route exact path="/css" component={N7}/>
                    <Route exact path="/refs" component={N8}/>
                    <Route exact path="/error-boundaries" component={N9}/>
                    <Route exact path="/context" component={N10}/>
                    <Route exact path="/portals" component={N11}/>
                    <Route exact path="/performance" component={N12}/>
                    <Route exact path="/reducers" component={N13}/>
                    <Route exact path="/custom-hooks" component={N14}/>
                    <Route exact path="/http-requests" component={N15}/>
                    <Route exact path="/redux-pattern" component={N16}/>
                </Switch>
            </Router>
        </div>
    );
}

