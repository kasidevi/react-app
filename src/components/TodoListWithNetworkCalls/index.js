import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Todo from '../TodoAppForAPI/Todo';

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';

@inject('todoStoreWithNetworkCalls')
@observer
class TodoListWithNetworkCalls extends Component {
    componentDidMount() {
        this.doNetWorkCalls();
    }
    propsFunction = () => {
        return this.props.todoStoreWithNetworkCalls.getTodoAPI();
    }

    doNetWorkCalls = () => {
        this.propsFunction();
    }

    renderTodosList = () => {
        const { todos, filteredTodos } = this.props.todoStoreWithNetworkCalls;
        if (todos.length === 0) {
            return <NoDataView/>;
        }
        else {
            //console.log('render', filteredTodos);
            return filteredTodos.map((todo) => { <Todo key={Math.random()} todo={todo}/> });
        }
    }
    render() {
        const { getTodoApiError, getTodoApiStatus } = this.props.todoStoreWithNetworkCalls;
        return <LoadingWrapperWithFailure
    apiStatus={getTodoApiStatus}
    apiError={getTodoApiError}
    onRetryClick={this.doNetWorkCalls}
    renderSuccessUI={this.renderTodosList}
    />;

    }
}
export default TodoListWithNetworkCalls;
