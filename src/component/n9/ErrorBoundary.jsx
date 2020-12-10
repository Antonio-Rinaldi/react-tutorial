import React, {Component} from "react";

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, error: error, errorInfo: errorInfo});
    }

    render() {
        return this.state.hasError
            ? this.getFallBackUI()
            : this.props.children;
    }

    getFallBackUI() {
        return (
            <div>
                <p>Error boundary catch the error: '{this.state.error}' with message: '{this.state.errorInfo}'</p>
            </div>
        );
    }
}

