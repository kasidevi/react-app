import { observable, action, computed } from 'mobx';

import TodoModelForAPI from '../models/TodoModelForAPI';

import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class TodoStoreWithNetworkCalls {
    @observable todos
    @observable selectedFilter
    @observable getTodosApiStatus
    @observable getTodosApiError
    todoServices
    constructor(todoServices) {
        this.todoServices = todoServices;
        // this.todos = [];
        this.init();
    }

    @action.bound
    setTodoApiResponse(todos) {
        this.todos = todos.map((todo) => { this.onAddTodo(todo.title) });
    }

    @action.bound
    setTodoApiError(error) {
        this.getTodoApiError = error;
    }

    @action.bound
    setTodoApiStatus(apiStatus) {
        this.getTodoApiStatus = apiStatus;
    }

    getTodoAPI() {
        const todoPromise = this.todoServices.getTodoAPI();
        return bindPromiseWithOnSuccess(todoPromise)
            .to(this.setTodoApiStatus, this.setTodoApiResponse)
            .catch(this.setTodoApiError);
    }

    @action
    init() {
        this.getTodoApiStatus = API_INITIAL;
        this.getTodoApiError = null;
        this.todos = [];
        this.selectedFilter = 'All';
    }
    @action
    clearStore() {
        this.init();
    }

    onAddTodo = (input) => {
        console.log('title in addtodo', input);
        let todoObject = {
            id: Math.random(),
            title: input,
            isChecked: false
        };
        const todoModelForAPI = new TodoModelForAPI(todoObject);
        this.todos.push(todoModelForAPI);
        //   console.log(this.todos);
    }
    @computed
    todosCount = () => {
        return this.todos.length;
    }

    onRemoveTodo = (id) => {
        let removeTodoId = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(removeTodoId, 1);
        let delTodoConfirmation = window.confirm('Do you really want to delete?');
        if (delTodoConfirmation === true) {
            this.todos;
        }
    }

    get filteredTodos() {
        console.log("filtered", this.todos);
        switch (this.selectedFilter) {
            case 'All':
                return this.todos;

            case 'Active':
                return [...this.todos].filter(todo => todo.isChecked === false);

            case 'Completed':
                return [...this.todos].filter(todo => todo.isChecked === true);
        }
    }

    onClearCompleted = () => {
        this.todos = this.todos.filter(todo => todo.isChecked === false);
    }

    @computed
    get getActiveTodosCount() {
        this.todos = this.todos.filter(todo => todo.isChecked === true);
        return this.todos.length;
    }

}
export default TodoStoreWithNetworkCalls;
