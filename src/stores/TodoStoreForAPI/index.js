import { observable, computed } from 'mobx';
import TodoModelForAPI from '../models/TodoModelForAPI';
class TodoStoreForAPI {
    @observable todos
    @observable selectedFilter
    constructor() {
        this.todos = [];
        this.selectedFilter = 'All';
    }

    onAddTodo = (input) => {
        let todoObject = {
            id: Math.random(),
            title: input,
            isChecked: false
        };
        const todoModelForAPI = new TodoModelForAPI(todoObject);
        this.todos.push(todoModelForAPI);
    }
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
    @computed
    get filteredTodos() {
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
const todoStoreForAPI = new TodoStoreForAPI();
export default todoStoreForAPI;
