import React from 'react';
import { observer } from "mobx-react"

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

@observer
class TodoAppForAPI extends React.Component {
    render() {
        return (<div>
        <h1>todos</h1>
        <AddTodo/>
        <TodoList/>
        <TodoFooter/>  </div>);
    }
}
export default TodoAppForAPI;
