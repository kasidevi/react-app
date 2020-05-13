import React from 'react'

import { Route } from 'react-router-dom';

import SignInPage from '../components/SignInPage';

import ProductsPage from '../../ProductsDashBoard/components/ProductsPage'

import {
    SIGN_IN_PATH,
    PRODUCTS_PAGE
}
from '../constants'

const routes = [
    <Route key={Math.random()} path={SIGN_IN_PATH} component={SignInPage}/>,
    <Route key={Math.random()} path={PRODUCTS_PAGE} component={ProductsPage}/>,
];

export default routes;
