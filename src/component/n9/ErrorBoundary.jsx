import React, {Component} from "react";

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    render() {
        return this.state.hasError
            ? this.getFallBackUI()
            : this.props.children;
    }

    getFallBackUI() {
        return (
            <div>
                <p>Error boundary catch the error with message: '{this.state.error}'</p>
            </div>
        );
    }

    componentDidCatch(error, errorInfo) {
        console.error(`Error: ${error}`);
        console.error(`Error Info: ${JSON.stringify(errorInfo)}`);
        this.setState({hasError: true, error: error.message});
    }

    // static getDerivedStateFromError(error) {
    //     return {hasError: true, error: error.message};
    // }
    //
    // componentDidCatch(error, errorInfo) {
    //     console.error(`Error: ${error}`);
    //     console.error(`Error Info: ${JSON.stringify(errorInfo)}`);
    // }
}

