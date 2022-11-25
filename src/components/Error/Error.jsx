import React from "react";
import styles from '../CoursePage/page.module.css'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    return (this.state.errorInfo
      ? (<p className={styles.error}>Ooops, something went wrong</p>)
      : this.props.children)
  }
}

export default ErrorBoundary;
