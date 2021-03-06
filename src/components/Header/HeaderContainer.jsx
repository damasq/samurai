import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';
import Header from './Header'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer)