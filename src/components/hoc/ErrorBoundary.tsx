import { Text, View } from 'react-native'
import React, { Component, ReactNode } from 'react'

type ErrorBoundaryState = {
    hasError: boolean
}

type ErrorBoundaryProps = {
    children: ReactNode
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Text>Something went wrong.</Text>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;