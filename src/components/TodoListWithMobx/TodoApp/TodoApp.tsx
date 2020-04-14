import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import todoStore from '../../../stores/TodoStore';
import AddTodo from '../AddTodo';
import TodoFooter from '../TodoFooter/TodoFooter';

@observer
class TodoApp extends React.Component {
    onAddTodo = (event) => {
          if (event.key === 'Enter' && event.target.value.trim() !== '') {
            todoStore.onAddTodo(event.target.value);
            event.target.value = "";
          }
     }
    // onRemoveTodo = (event) => {
    //     todoStore.onRemoveTodo(event);
    // }
    // onChangeSelectedFilter = (selectedFilter) => {
    //     todoStore.onChangeSelectedFilter(selectedFilter);
    // }
    render() {
        return (<div className='header-div'>
     <h1>todos</h1>
     <input className='user-input-field' type='text' placeholder='What needs to be done?' onKeyDown={this.onAddTodo}></input>
     <div>{todoStore.onChangeSelectedFilter(todoStore.selectedFilter)}</div>
     <TodoFooter/>
        </div>);

    }
}
export default TodoApp;


// import React from 'react';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';

// let idCount = 0;
// @observer
// class Todos extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         return (<div id={this.props.userInput.id} className='checkbox-input-delete'> 
//         <input onClick={()=>this.props.checkbox(this.props.userInput)} className='check-box' type='checkbox' checked={this.props.userInput.isChecked}/>
//         <input className={this.props.classNameToLinethrough} type='text' defaultValue={this.props.userInput.inputText} disabled={this.props.userInput.isChecked}/>
//         <button className='delete-button' onClick={()=>this.props.removeTodo(this.props.userInput)}>X</button>
//         </div>);
//     }
// }

// @observer
// class TodoListUsingMobx extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this = { inputValues: [], filterStatus: 'All' };
//     // }
//     @observable inputValues = []
//     @observable filterStatus = 'All'
//     // @observable idCount = 0;
//     enterKey = (event) => {
//         let object = {};
//         object.inputText = event.target.value;
//         object.id = idCount;
//         object.isChecked = false;
//         if (event.key === 'Enter' && object.inputText.trim() !== '') {
//             let arrayForTodos = [...this.inputValues];
//             arrayForTodos.push(object);
//             this.inputValues = arrayForTodos;
//             event.target.value = "";
//             idCount++;
//         }
//     }

//     removeList = (removeTodo) => {
//         alert(removeTodo.id)
//         let listOfObjects = [...this.inputValues];
//         let removeTodoId = listOfObjects.indexOf(removeTodo);
//         listOfObjects.splice(removeTodoId, 1);
//         let delTodoConfirmation = window.confirm('Do you really want to delete?');
//         if (delTodoConfirmation === true) {
//             this.inputValues = listOfObjects;
//         }
//     }

//     todoListCheckedOrNot = (checkbox) => {
//         //  alert(event);
//         let listOfObjects = [...this.inputValues];
//         let index = listOfObjects.indexOf(checkbox);
//         listOfObjects[index].isChecked = !listOfObjects[index].isChecked;
//         this.inputValues = listOfObjects;
//     }

//     allTodos = () => {
//         this.filterStatus = 'All';
//     }

//     activeTodos = () => {
//         this.filterStatus = 'Active';
//     }
//     completedTodos = () => {
//         this.filterStatus = 'Completed';
//     }
//     clearCompletedTodos = () => {
//         let listOfObjects = [...this.inputValues];
//         let unCompletedList = listOfObjects.filter(todo => todo.isChecked === false);
//         this.inputValues = unCompletedList;
//     }
//     itemsLeft = () => {
//         let listOfObjects = [...this.inputValues];
//         let unCompletedList = listOfObjects.filter(todo => todo.isChecked === false);
//         return unCompletedList.length;
//     }
//     clearCompleted = () => {
//         let listOfObjects = [...this.inputValues];
//         let unCompletedList = listOfObjects.filter(todo => todo.isChecked === true);
//         return unCompletedList.length;
//     }
//     filterStatusData = (filter) => {
//         switch (filter) {
//             case 'All':
//                 return (<div>{this.inputValues.map((todo)=>
//               <Todos key={todo.id} checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text'} />)}
//               </div>);
//             case 'Active':
//                 let activeList = [...this.inputValues].filter(todo => todo.isChecked === false);
//                 return <div>
//                 {activeList.map((todo)=>
//                 <Todos key={todo.id}  checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text' }/>)}
//                 </div>;
//             case 'Completed':
//                 let completedList = [...this.inputValues].filter(todo => todo.isChecked === true);
//                 return <div> {completedList.map((todo)=>
//                 <Todos  key={todo.id} checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} classNameToLinethrough={todo.isChecked?'user-text-linethrough':'user-text' }/>)}
//                 </div>;
//             default:
//                 throw Error('Invalid state');
//         }
//     }

//     render() {
//         return (
//             <div  className='header-div'>
//         <h1>todos</h1>
//         <input className='user-input-field' type='text' placeholder='What needs to be done?' onKeyDown={this.enterKey}></input>

//         {/*<div> {this.inputValues.map((todo)=><Todos userInput={todo} />)}</div>
//         <div> 
//         {this.inputValues.map((todo)=>
//         <Todos checkbox={this.todoListCheckedOrNot} removeTodo={this.removeList}  userInput={todo} all={this.allTodos}
//             activeList={this.activeTodos}
//         />)}
//         </div>*/}   

//         <div>{this.filterStatusData(this.filterStatus)}</div>
//         <div className={this.inputValues.length>0?'footer-visible':'footer-hidden'}>
//         <p className='footer-itemsleft'>{this.itemsLeft()} itemsLeft</p>
//         <p className='footer-data' onClick={this.allTodos}>All</p>
//         <p className='footer-data' onClick={this.activeTodos}>Active</p>
//         <p className='footer-data' onClick={this.completedTodos}>Completed</p>
//         <p className={this.clearCompleted()>0?'clear-complete-visible':'clear-complete-hidden'} onClick={this.clearCompletedTodos}>Clear completed</p>
//         </div>
//         </div>);
//     }
// }

// export { TodoListUsingMobx };
