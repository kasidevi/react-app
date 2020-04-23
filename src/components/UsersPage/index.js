import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

//import stores from '../../stores';

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';

//const usersStore = stores.usersStore;

@inject('usersStore')
@observer
class UsersPage extends Component {

    componentDidMount() {
        this.doNetWorkCalls();
    }
    doNetWorkCalls = () => {
        this.props.usersStore.getUsersAPI();
    }
    renderUsersList = () => {
        const { users } = this.props.usersStore;
        if (users.length === 0) {
            return <NoDataView/>;
        }
        return users.map((userName) => <div key={Math.random()}>{userName}</div>);
    }
    render() {
        const { getUsersApiError, getUsersApiStatus } = this.props.usersStore;
        return <LoadingWrapperWithFailure 
        apiStatus={getUsersApiStatus}
        apiError={getUsersApiError}
        onRetryClick={this.doNetWorkCalls}
        renderSuccessUI={this.renderUsersList}
        />;
    }

}

export default UsersPage;
