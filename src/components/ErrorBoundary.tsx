import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-text p-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Oops!</h1>
            <p className="mb-6 text-text-muted">
              Something went wrong. Our team has been notified.
            </p>
            <a href="/" className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors">
              Return Home
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
