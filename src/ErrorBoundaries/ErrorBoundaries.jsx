
class ErrorBoundaries extends React.Component {
    state = {
        error: null,
        errorInfo: null,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.error) {
            return (
                <p>
                    { this.state.error && this.state.error.toString() }
                    <br />
                    { this.state.errorInfo && this.state.errorInfo.componentStack }
                </p>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundaries;