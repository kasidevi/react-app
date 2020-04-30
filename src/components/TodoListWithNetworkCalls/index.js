import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Todo from '../TodoAppForAPI/Todo';
// import AddTodo from '../TodoAppForAPI/AddTodo';
import TodoFooter from '../TodoAppForAPI/TodoFooter';

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';

@inject('todoStoreWithNetworkCalls')
@observer
class TodoListWithNetworkCalls extends Component {
    componentDidMount() {
        this.doNetWorkCalls();
    }
    propsFunction = () => {
        return this.props.todoStoreWithNetworkCalls;
    }

    componentwillUnmount() {
        this.props.todoStoreWithNetworkCalls.clearStore();
    }

    doNetWorkCalls = () => {
        this.propsFunction().getTodoAPI();
    }
    onAddTodo = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value !== '') {
                this.propsFunction.onAddTodo(event.target.value);
            }
        }
    }
    renderTodosList = () => {
        const { todos, filteredTodos } = this.props.todoStoreWithNetworkCalls;
        return (<div>
          <h1>todos</h1>
           <input type='text' onKeyDown={this.onAddTodo}/>
            {todos.length === 0 ?
            <NoDataView/> :
            <div>{filteredTodos.map((todo) =>  <Todo key={Math.random()} todo={todo}/> )}</div>}
            <TodoFooter/>
            </div>);
    }

    render() {
        const { todos, filteredTodos } = this.props.todoStoreWithNetworkCalls;
        console.log("rendered Api todos", filteredTodos);
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
