import React, { Component } from 'react';
import { observer } from 'mobx-react';
import userStore from '../../stores/UsersStore';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';

@observer
class UsersPage extends Component {

    componentDidMount() {
        this.doNetWorkCalls();
    }
    doNetWorkCalls = () => {
        userStore.getUsersAPI();
    }
    renderUsersList = () => {
        const { users } = userStore;
        if (users.length === 0) {
            return <NoDataView/>;
        }
        return users.map((userName) => <div key={Math.random()}>{userName}</div>);
    }
    render() {
        const { getUsersApiError, getUsersApiStatus } = userStore;
        return <LoadingWrapperWithFailure 
        apiStatus={getUsersApiStatus}
        apiError={getUsersApiError}
        onRetryClick={this.doNetWorkCalls}
        renderSuccessUI={this.renderUsersList}
        />;
    }

}

export default UsersPage;
