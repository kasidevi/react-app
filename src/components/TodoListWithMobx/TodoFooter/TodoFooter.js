import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import todoStore from '../../../stores/TodoStore/TodoStore.js';

@observer
class TodoFooter extends React.Component {
    allTodos = () => {
        todoStore.selectedFilter = 'All';
    }

    activeTodos = () => {
        todoStore.selectedFilter = 'Active';
    }
    completedTodos = () => {
        todoStore.selectedFilter = 'Completed';
    }
    render() {
        return (<div className={todoStore.todosCount>0?'footer-visible':'footer-hidden'}>
         <p className='footer-itemsleft'>{todoStore.activeTodosCount} itemsLeft</p>
         <p className='footer-data' onClick={this.allTodos}>All</p>
         <p className='footer-data' onClick={this.activeTodos}>Active</p>
         <p className='footer-data' onClick={this.completedTodos}>Completed</p>
         <p onClick={todoStore.onClearCompleted}>Clear completed</p>
        </div>);
    }
}

export default TodoFooter;
