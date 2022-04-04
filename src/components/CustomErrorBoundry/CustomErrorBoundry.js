import React, { Component } from 'react'

class CustomErrorBoundry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }

    }
    componentDidCatch(error) {
        console.log('This is my custom error: ', error);
    }
    render() {
        if (this.state.hasError) {
            return <h1>You have reached an error page. :(</h1>
        }
        return (
            this.props.children
        )
    }
}

export default CustomErrorBoundry