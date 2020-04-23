import React from 'react';
import { observer } from 'mobx-react';
import todoStoreForAPI from '../../../stores/TodoStoreForAPI';

@observer
class Todo extends React.Component {
    updateText = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value !== "") {
                this.props.todo.updateText(event.target.value);
            }
        }
    }

    render() {
        const { todo } = this.props;
        return (<div>
        <input onClick={todo.onCompletedTodo} type='checkbox' checked={todo.isChecked}/>
        <input onKeyDown={this.updateText}  type='text' defaultValue={this.props.todo.title} disabled={todo.isChecked}/>
        <button onClick={()=>todoStoreForAPI.onRemoveTodo(todo.id)} key={this.props.key}>X</button>
        </div>);
    }

}
export default Todo;
