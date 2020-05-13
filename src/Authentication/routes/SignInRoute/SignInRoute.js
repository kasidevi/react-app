import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
//import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
//import { MainDiv, SignInPageMainDiv, SignInText, UserName, Password, SignInButton, ErrorMessage } from '../../styledComponents/SignInStyledPage/SignInStyledPage';

//import { getAccessToken } from '../../../utils/StorageUtils';
import SignInPage from '../../components/SignInPage';

@inject('authStore')
@observer
class SignInRoute extends React.Component {

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
        //  alert(event.target.value);
        console.log("route-onChangeUsername", event.target.value);
        if (event.target.value.trim !== '') {
            this.username = event.target.value;
        }
    }

    onChangePassword = (event) => {
        //   alert(event.target.value);
        console.log("route-onPassword", event.target.value);
        if (event.target.value.trim !== '') {
            this.password = event.target.value;
        }
    }

    onClickSignIn = (event) => {
        //    alert(event.target.value);

        console.log("route-onClickSignIn", event.target.value);
        if (this.username === '') {
            this.errorMessage = 'Please enter username';
        }
        else if (this.password === '') {
            this.errorMessage = 'Please enter password';
        }
        else {
            this.props.authStore.userSignIn();
            let { history } = this.props;
            history.push('/v1/products/');
        }
    }

    render() {
        console.log('route render');
        //alert('route render');
        return (
            <SignInPage 
            onChangeUsername={this.onChangeUsername}
            onChangePassword={this.onChangePassword}
            onClickSignIn={this.onClickSignIn}
            errorMessage={this.errorMessage}
            username={this.username}
        getUserSignInAPIError={this.props.authStore.getUserSignInAPIError}
        getUserSignInAPIStatus ={this.props.authStore.getUserSignInAPIStatus}
            />);
    }

}

export default SignInRoute;
