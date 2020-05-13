/*global expect*/
import React from "react";
import { render } from "@testing-library/react";

import SignInPage from ".";

describe("SignInPage", () => {

    it("check username", () => {
        const username = "text-user";
        const { getByPlaceholderText } = render(
            <SignInPage username={username} onChangeUsername={()=>{}}/>
        );

        const usernameField = getByPlaceholderText("Username");

        expect(usernameField.value).toBe(username);
    });

    it("check password", () => {
        const password = 'password';
        const { getByPlaceholderText } = render(
            <SignInPage password={password} onChangePassword={()=>{}}/>
        );
        const passwordField = getByPlaceholderText("Password");

        expect(passwordField.value).toBe(password);
    });

    it("Error message", () => {

        const { getByText } = render(
            <SignInPage errorMessage="Invaild text" />
        );
        getByText(/Invaild text/i);
    });

});
