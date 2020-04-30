import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import { MainDiv, SignInPageMainDiv, SignInText, UserName, Password, SignInButton, ErrorMessage } from '../../styledComponents/SignInStyledPage/SignInStyledPage';

@inject('authStore')
@observer
class SignInPage extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
    isSignedOrNot
    constructor(props) {
        super(props);
        this.username = '';
        this.password = '';
        this.errorMessage = '';
    }
    componentDidMount() {
        this.doNetWorkCalls();
    }

    doNetWorkCalls = () => {
        this.props.authStore.userSignIn();
    }

    onChangeUsername = (event) => {
        if (event.target.value.trim !== '') {
            this.username = event.target.value;
        }
    }

    onChangePassword = (event) => {
        if (event.target.value.trim !== '') {
            this.password = event.target.value;
        }
    }

    onClickSignIn = (event) => {
        this.props.authStore.userSignIn();
        if (this.username === '') {
            this.errorMessage = 'Please enter username';
        }
        else if (this.password === '') {
            this.errorMessage = 'Please enter password';
        }
        else {
            let { history } = this.props;
            history.push('/grid-game');
        }
    }

    renderPage = () => {
        return (
            <MainDiv>
        <SignInPageMainDiv>
        <SignInText>Sign in</SignInText>
      
        <UserName onChange={this.onChangeUsername} value={event.target.value} type='text' placeholder="Username"/>
        <Password onChange={this.onChangePassword} value={event.target.value} type='password' placeholder="Password"/>
        <SignInButton onClick={this.onClickSignIn} type='submit'>Sign In</SignInButton>
        <ErrorMessage>{this.errorMessage}</ErrorMessage>
        { /*{this.isSignedOrNot? <p>logged</p>:<ErrorMessage>{this.errorMessage}</ErrorMessage>}*/}
  
</SignInPageMainDiv>
</MainDiv>);
    }

    render() {
        const { getUserSignInAPIError, getUserSignInAPIStatus } = this.props.authStore;
        return <LoadingWrapperWithFailure
         apiStatus={getUserSignInAPIStatus}
         apiError={getUserSignInAPIError}
         onRetryClick={this.doNetWorkCalls}
         renderSuccessUI={this.renderPage}
   />;
    }
}

export default SignInPage;
