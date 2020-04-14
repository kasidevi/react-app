import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import todoStore from '../../../stores/TodoStore';
import TodoModel from '../../../stores/models';
@observer
class AddTodo extends React.Component {
    updateTodo = (event) => {
        this.props.userInput.inputText = event.target.value;
    }

    render() {
        return (<div id={this.props.userInput.id} className='checkbox-input-delete'> 
        <input onClick={()=>this.props.checkbox(this.props.userInput)} className='check-box' type='checkbox' checked={this.props.userInput.isChecked}/>
        <input className={this.props.classNameToLinethrough} type='text' defaultValue={this.props.userInput.inputText} onChange={this.updateTodo}  disabled={this.props.userInput.isChecked}/>
        <button className='delete-button' onClick={()=>this.props.removeTodo(this.props.userInput)}>X</button>
        </div>);
    }
}

export default AddTodo;
