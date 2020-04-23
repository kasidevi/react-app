import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import todoStore from '../../../stores/TodoStore';
@observer
class AddTodo extends React.Component {
    updateTodo = (event) => {
        this.props.todo.inputText = event.target.value;
    }
    changeInput = (event) => {
        if (event.CharCode === 13) {
            this.props.userInput.onChangeInputText(event.target.value);
            event.target.value = "";
        }
    }

    render() {
        return (<div id={this.props.userInput.id} className='checkbox-input-delete'> 
        <input onClick={()=>this.props.userInput.onChangeCheckBox()} className='check-box' type='checkbox' checked={this.props.userInput.isChecked}/>
        <input className={this.props.classNameToLinethrough} type='text' defaultValue={this.props.userInput.inputText} onKeyDown={this.changeInput}  disabled={this.props.userInput.isChecked}/>
        <button className='delete-button' onClick={()=>this.props.removeTodo(this.props.userInput)}>X</button>
        </div>);
    }
}

export default AddTodo;

/*import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class AddTodo extends React.Component{
     @observable todoTitle
     onAddTodo=()=>{}
     onChangeInput=()=>{}
     render(){
         return 
     }
}


*/
