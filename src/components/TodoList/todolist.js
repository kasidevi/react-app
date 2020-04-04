import React from 'react';
let idCount = 0;
class Todos extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id={this.props.userInput.id} className='checkbox-input-delete'> 
        <input onClick={()=>this.props.checkbox(this.props.userInput)} className='check-box' type='checkbox' checked={this.props.userInput.isChecked}/>
        <input className={this.props.classNameToLinethrough} type='text' defaultValue={this.props.userInput.inputText} disabled={this.props.userInput.isChecked}/>
        <button className='delete-button' onClick={()=>this.props.removeTodo(this.props.userInput)}>X</button>
        </div>);
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValues: [], filterStatus: 'All' };
    }
    enterKey = (event) => {
        let object = {};
        object.inputText = event.target.value;
        object.id = idCount;
        object.isChecked = false;
        if (event.key === 'Enter' && object.inputText.trim() !== '') {
            let arrayForTodos = [...this.state.inputValues];
            arrayForTodos.push(object);
            this.setState({ inputValues: arrayForTodos });
            event.target.value = "";
            idCount++;
        }
    }

    removeList = (removeTodo) => {
        let listOfObjects = [...this.state.inputValues];
        let removeTodoId = listOfObjects.indexOf(removeTodo);
        listOfObjects.splice(removeTodoId, 1);
        let delTodoConfirmation = window.confirm('Do you really want to delete?');
        if (delTodoConfirmation === true) {
            this.setState({ inputValues: listOfObjects });
        }
    }

    todoListCheckedOrNot = (checkbox) => {
        //  alert(event);
        let listOfObjects = [...this.state.inputValues];
        let index = listOfObjects.indexOf(checkbox);
        listOfObjects[index].isChecked = !listOfObjects[index].isChecked;
        this.setState({ inputValues: listOfObjects });
    }

    allTodos = () => {
        this.setState({ filterStatus: 'All' });
    }

    activeTodos = () => {
        this.setState({ filterStatus: 'Active' });
    }
    completedTodos = () => {
        this.setState({ filterStatus: 'Completed' });
    }
    clearCompletedTodos = () => {
        let listOfObjects = [...this.state.inputValues];
        let unCompletedList = listOfObjects.filter(todo => todo.isChecked === false);
        this.setState({ inputValues: unCompletedList });
    }
    itemsLeft = () => {
        let listOfObjects = [...this.state.inputValues];
        let unCompletedList = listOfObjects.filter(todo => todo.isChecked === false);
        return unCompletedList.length;
    }
    clearCompleted = () => {
        let listOfObjects = [...this.state.inputValues];
        let unCompletedList = listOfObjects.filter(todo => todo.isChecked === true);
        return unCompletedList.length;
    }
    filterStatusData = (filter) => {
        switch (filter) {
            case 'All':
                return (<div>{this.state.inputValues.map((todo)=>
               <Todos key={todo.id} checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text'} />)}
               </div>);
            case 'Active':
                let activeList = [...this.state.inputValues].filter(todo => todo.isChecked === false);
                return <div>
                {activeList.map((todo)=>
                <Todos key={todo.id}  checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text' }/>)}
                </div>;
            case 'Completed':
                let completedList = [...this.state.inputValues].filter(todo => todo.isChecked === true);
                return <div> {completedList.map((todo)=>
                <Todos  key={todo.id} checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text' }/>)}
                </div>;
            default:
                throw Error('Invalid state');
        }
    }

    render() {
        return (
            <div  className='header-div'>
        <h1>todos</h1>
        <input className='user-input-field' type='text' placeholder='What needs to be done?' onKeyDown={this.enterKey}></input>
        
        {/*<div> {this.state.inputValues.map((todo)=><Todos userInput={todo} />)}</div>
        <div> 
        {this.state.inputValues.map((todo)=>
        <Todos checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} all={this.allTodos}
            activeList={this.activeTodos}
        />)}
        </div>*/}   
     
        <div>{this.filterStatusData(this.state.filterStatus)}</div>
        <div className={this.state.inputValues.length>0?'footer-visible':'footer-hidden'}>
        <p className='footer-itemsleft'>{this.itemsLeft()} itemsLeft</p>
        <p className='footer-data' onClick={this.allTodos}>All</p>
        <p className='footer-data' onClick={this.activeTodos}>Active</p>
        <p className='footer-data' onClick={this.completedTodos}>Completed</p>
        <p className={this.clearCompleted()>0?'clear-complete-visible':'clear-complete-hidden'} onClick={this.clearCompletedTodos}>Clear completed</p>
        </div>
        </div>);
    }
}

export { TodoList };
