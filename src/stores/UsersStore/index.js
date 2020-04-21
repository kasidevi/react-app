/*global fetch*/
import { observable, action } from 'mobx';
import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

import UserService from '../../services/UserService';

import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
class UserStore {

    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    constructor(userService) {
        this.userService = userService;
        this.init();
    }
    @action.bound
    setUsersApiResponse(users) {
        this.users = users.map((user) => user.name);
        // console.log(this.users);
        // this.getUsersApiStatus = API_SUCCESS;
    }

    @action.bound
    setUserspiError(error) {
        this.getUsersApiError = error;
        //this.getUsersApiStatus = API_FAILED;
    }
    @action.bound
    setUsersApiStatus(apiStatus) {
        this.getUsersApiStatus = apiStatus;
    }
    @action.bound
    getUsersAPI() {
        // const api = create({
        //     baseURL: 'https://jsonplaceholder.typicode.com',
        // });
        // const usersPromise = networkCallWithApisauce(api, 'users/', {}, apiMethods.get) //2.endpoint,3.{}--requestobject
        const usersPromise = this.userService.getUsersAPI();
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setUsersApiStatus, this.setUsersApiResponse)
            .catch(this.setUsersApiError);

        //  this.getUsersApiStatus = API_FETCHING;
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then(this.setUsersAPIResponse)
        //     // .then((users)=>this.setUsersAPIResponse(users)); //use can use like this also but above line better code
        //     .catch(this.setUsersAPIError);
    }

    @action
    init() {
        this.getUsersApiStatus = API_INITIAL;
        this.getUsersApiError = null;
        this.users = [];
    }

    @action
    clearStore() {
        this.init();
    }
}

const userService = new UserService();
const userStore = new UserStore(userService);
export default userStore;
