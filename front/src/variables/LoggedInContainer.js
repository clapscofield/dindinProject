import React from "react";
import { connect } from "react-redux";

class LoggedInContainer extends React.Component {
    componentDidMount() {
      const { isLoggedIn, history } = this.props
  
      if (!isLoggedIn) {
        history.push("/pagina-inicial");
        window.location.reload();
      }
    }
  
    render() {
      const { isLoggedIn } = this.props;
      if (isLoggedIn) {
        return this.props.children
      } else {
        return null
      }
    }

  }

  function mapStateToProps(state, ownProps) {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      currentURL: ownProps.location.pathname
    }
  }
  
  export default connect(mapStateToProps)(LoggedInContainer)