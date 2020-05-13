/* global expect,jest*/
import {
    API_INITIAL,
    API_FAILED,
    API_FETCHING,
    API_SUCCESS
}
from '@ib/api-constants';

import AuthService from '../../services/AuthService/AuthAPI.js';
import getUsersResponse from '../../fixtures/getUsersResponse.json';
import AuthStore from '.';

describe("AuthStore tests", () => {
    let authService;
    let authStore;

    beforeEach(() => {
        authService = new AuthService();
        authStore = new AuthStore(authService);
    });

    it("should test intialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

    it("should test userSignInAPI data fetching state", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authService.signInAPI = mockSignInAPI;
    });

    it("should test userSignInAPI success state", async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getUsersResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authService.signInAPI = mockSignInAPI;

        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
    });

    it("should test userSignInAPI failure state", async() => {
        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(getUsersResponse);
        }).catch(() => {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authService.signInAPI = mockSignInAPI;

        mockFailurePromise.catch(e => {
            expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
            expect(authStore.getUserSignInAPIError).toBe("error");
        });
    });

});
