import React from 'react';
import { observer } from "mobx-react";
import todoStoreForAPI from '../../../stores/TodoStoreForAPI';
import Todo from '../Todo';

@observer
class TodoList extends React.Component {

    renderTodoList = () => {
        console.log(todoStoreForAPI.todos, "todolist");
        return todoStoreForAPI.todos.length > 0 ?
            todoStoreForAPI.filteredTodos.map((todo) => <Todo key={Math.random()} todo={todo} />) : null;
    }

    render() {
        return (<div>{this.renderTodoList()}</div>);
    }
}
export default TodoList;
