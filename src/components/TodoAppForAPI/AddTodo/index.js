import React from 'react';
import { observer } from "mobx-react";
import todoStoreForAPI from '../../../stores/TodoStoreForAPI';
import TodoModelForAPI from '../../../stores/models/TodoModelForAPI';

@observer
class AddTodo extends React.Component {
    AddTodo = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value !== "") {
                todoStoreForAPI.onAddTodo(event.target.value);
                event.target.value = '';
            }
        }
    }
    render() {
        return (<input type='text' onKeyDown={this.AddTodo}/>);
    }
}
export default AddTodo;
