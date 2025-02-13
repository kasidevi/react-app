import React from 'react';
import { observable, computed, action } from 'mobx';
import AddTodo from '../../components/TodoListWithMobx/AddTodo';
import TodoModel from '../models';
//let idCount = 0;

class TodoStore {
    @observable todos
    @observable selectedFilter
    constructor() {
        this.todos = [];
        this.selectedFilter = 'All';
    }
    onAddTodo = (event) => {
        const object = {};
        object.inputText = event.target.value;
        object.id = Math.random();
        object.isChecked = false;

        const newTodoModel = new TodoModel(object);
        this.todos.push(newTodoModel);

    }

    onRemoveTodo = (removeTodo) => {
        let listOfObjects = [...this.todos];
        let removeTodoId = listOfObjects.indexOf(removeTodo);
        listOfObjects.splice(removeTodoId, 1);
        let delTodoConfirmation = window.confirm('Do you really want to delete?');
        if (delTodoConfirmation === true) {
            this.todos = listOfObjects;
        }
    }

    @action.bound
    onClearCompleted = () => {
        this.todos = this.todos.filter(todo => todo.isChecked === false);
    }
    todoListCheckedOrNot = (checkbox) => {
        let listOfObjects = [...this.todos];
        let index = listOfObjects.indexOf(checkbox);
        listOfObjects[index].isChecked = !listOfObjects[index].isChecked;
        this.todos = listOfObjects;
    }
    @computed
    get todosCount() {
        return this.todos.length;
    }
    @computed
    get activeTodosCount() {
        let listOfObjects = [...this.todos];
        let unCompletedList = listOfObjects.filter(todo => todo.isChecked === false);
        return unCompletedList.length;
    }
    getFilteredTodos = () => {
        switch (this.selectedFilter) {
            case 'All':
                return this.todos;

            case 'Active':
                return [...this.todos].filter(todo => todo.isChecked === false);

            case 'Completed':
                return [...this.todos].filter(todo => todo.isChecked === true);
        }
    }
}
const todoStore = new TodoStore();
export default todoStore;


/*import { observable, computed, action } from 'mobx';

class TodoStore {
    @observable todos
    @observable selectedFilter
    constructor() {
        this.todos = [];
        this.selectedFilter = 'All';
    }
    onAddTodo = () => {}
    onRemoveTodo = () => {}
    onCompleteTodo = () => {}
    onUpdateTodoTitle = () => {}
    onChangeSelectedFilter = () => {}
    onClearCompleted = () => {}

    @computed
    get getActiveTodosCount() {}

    @computed
    get getFilteredTodos() {}

}
const todoStore = new TodoStore();
export default todoStore;
*/

/*
 onChangeSelectedFilter = (filter) => {
        switch (filter) {
            case 'All':
                return (<div>{this.todos.map((todo)=>
              <AddTodo key={todo.id} checkbox={this.todoListCheckedOrNot} removeTodo={this.onRemoveTodo}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text'} />)}
              </div>);
            case 'Active':
                let activeList = [...this.todos].filter(todo => todo.isChecked === false);
                return <div>
                {activeList.map((todo)=>
                <AddTodo key={todo.id}  checkbox={this.todoListCheckedOrNot} removeTodo={this.onRemoveTodo}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text' }/>)}
                </div>;
            case 'Completed':
                let completedList = [...this.todos].filter(todo => todo.isChecked === true);
                return <div> {completedList.map((todo)=>
                <AddTodo  key={todo.id} checkbox={this.todoListCheckedOrNot} removeTodo={this.onRemoveTodo}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text' }/>)}
                </div>;
            default:
                throw Error('Invalid state');
        }
    }
*/
