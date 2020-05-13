// import React from "react";
// import { observer } from "mobx-react";
// import { SignInButton } from '../../styledComponents/SignInStyledPage/SignInStyledPage';

// @observer
// class SignInPage extends React.Component {
//   render() {
//     const {
//       apiStatus,
//       username,
//       onChangeUsername,
//       password,
//       onChangePassword,
//       onEnterKeyPress,
//       onSubmitForm,
//       errorMessage
//     } = this.props;
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-200">
//         <form className="flex flex-col p-10 bg-white">
//           <h2 className="font-bold mb-4">Sign in</h2>
//           <input
//             type="text"
//             value={username}
//             onChange={onChangeUsername}
//             className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
//             placeholder="Username"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={onChangePassword}
//             className="border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded"
//             placeholder="Password"
//             onKeyPress={onEnterKeyPress}
//           />
//           <SignInButton
//             text="Sign in"
//             onClick={onSubmitForm}
//             className="flex justify-center w-48 h-10 rounded bg-gray-900"
//             apiStatus={apiStatus}
//             onKeyPress={onEnterKeyPress}
//           >Sign In</SignInButton>
//           {errorMessage !== "" && errorMessage !== undefined ? (
//             <span className="text-red-700 mt-2 w-48 text-sm">
//               {errorMessage}
//             </span>
//           ) : null}
//         </form>
//       </div>
//     );   
//   }
// }

// export default SignInPage;


import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import { MainDiv, SignInPageMainDiv, SignInText, UserName, Password, SignInButton, ErrorMessage } from '../../styledComponents/SignInStyledPage/SignInStyledPage';

import { getAccessToken } from '../../../utils/StorageUtils';

//@inject('authStore')
@observer
class SignInPage extends React.Component {
  @observable username
  @observable password
  @observable errorMessage
  isSignedOrNot
  userNameRef = React.createRef();
  passwordRef = React.createRef();
  constructor(props) {
    super(props);
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }
  componentDidMount() {
    alert('cDM')
    this.userNameRef.current.focus();
    this.passwordRef.current.focus();
  }
  // componentDidMount() {
  //   this.doNetWorkCalls();
  // }

  // doNetWorkCalls = () => {
  //   this.props.authStore.userSignIn();
  // }

  // onChangeUsername = (event) => {
  //   if (event.target.value.trim !== '') {
  //     this.username = event.target.value;
  //   }
  // }

  // onChangePassword = (event) => {
  //   if (event.target.value.trim !== '') {
  //     this.password = event.target.value;
  //   }
  // }

  // onClickSignIn = (event) => {
  //   if (this.username === '') {
  //     this.errorMessage = 'Please enter username';
  //   }
  //   else if (this.password === '') {
  //     this.errorMessage = 'Please enter password';
  //   }
  //   else {
  //     this.props.authStore.userSignIn();
  //     let { history } = this.props;
  //     history.push('/v1/products/');
  //   }
  // }

  renderPage = () => {
    console.log('SignInPage render', this.props.onChangeUsername, this.props.onChangePassword, this.props.onClickSignIn, this.props.errorMessage);

    return (
      <MainDiv>
        <SignInPageMainDiv>
        <SignInText>Sign in</SignInText>
        <UserName ref={this.userNameRef} onChange={this.props.onChangeUsername} value={event.target.value} type='text' placeholder="Username"/>
        <Password ref={this.passwordRef} onChange={this.props.onChangePassword} value={event.target.value} type='password' placeholder="Password"/>
        <SignInButton onClick={this.props.onClickSignIn} type='submit'>Sign In</SignInButton>
        <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
        { /*{this.isSignedOrNot? <p>logged</p>:<ErrorMessage>{this.errorMessage}</ErrorMessage>}*/}
        </SignInPageMainDiv>
        </MainDiv>);
  }

  render() {
    //const { getUserSignInAPIError, getUserSignInAPIStatus } = this.props.authStore;
    console.log('SignInPage render');
    return <LoadingWrapperWithFailure
          apiStatus={this.props.getUserSignInAPIStatus}
          apiError={this.props.getUserSignInAPIError}
          onRetryClick={this.doNetWorkCalls}
          renderSuccessUI={this.renderPage}
  />;
  }

}

export default SignInPage;
