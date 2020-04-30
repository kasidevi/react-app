import { observable, action } from 'mobx';
import { API_INITIAL, API_FAILED, API_SUCCESS, API_FETCHING } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class AuthStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable authAPIService
    authService
    constructor(authService) {
        this.authService = authService;
        this.init();
    }

    @action.bound
    userSignIn() {
        const userSignInPromise = this.authService.signInAPI();
        return bindPromiseWithOnSuccess(userSignInPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError);
    }

    @action.bound
    setUserSignInAPIResponse() {

    }

    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error;
    }

    @action.bound
    setGetUserSignInAPIStatus(apiStatus) {
        this.getUserSignInAPIStatus = apiStatus;
    }

    @action.bound
    clearStore() {
        this.init();
    }

    @action.bound
    userSignOut() {}

    @action
    init() {
        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
    }

}

export { AuthStore };
