import React, {Component} from "react";

export default class ClassComponent extends Component {

    render() {
        return(
            <>
                <h6>Class Component</h6>
                <p>Property - {this.props.property}</p>
                {this.props.children}
            </>
        );
    }

    componentDidMount() {}
    componentDidCatch(error, errorInfo) {}

    shouldComponentUpdate(nextProps, nextState, nextContext) {}
    getSnapshotBeforeUpdate(prevProps, prevState) {}
    componentDidUpdate(prevProps, prevState, snapshot) {}

}
