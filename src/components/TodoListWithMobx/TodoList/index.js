import React from 'react';
import { observer } from 'mobx-react';

import todoStore from '../../../stores/TodoStore';
import AddTodo from '../AddTodo';

@observer
class TodoList extends React.Component {
    render() {
        const todos = todoStore.getFilteredTodos();
        const { todoListCheckedOrNot, onRemoveTodo } = todoStore;
        console.log(todos);
        return (<div>{todos.map((todo)=>
              <AddTodo  key={todo.id} 
                        checkbox={todoListCheckedOrNot} 
                        removeTodo={onRemoveTodo}  
                        userInput={todo} 
                        classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text'} />)}
              </div>);
    }

}

export default TodoList;
