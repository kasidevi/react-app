import React from 'react';
import { observer } from 'mobx-react';
import todoStoreForAPI from '../../../stores/TodoStoreForAPI';

@observer
class TodoFooter extends React.Component {
    allTodos = () => {
        todoStoreForAPI.selectedFilter = 'All';
    }

    activeTodos = () => {
        todoStoreForAPI.selectedFilter = 'Active';
    }
    completedTodos = () => {
        todoStoreForAPI.selectedFilter = 'Completed';
    }
    render() {
        return (<div className={todoStoreForAPI.todosCount()>0?'footer-visible':'footer-hidden'}>
         <p className='footer-itemsleft'>{todoStoreForAPI.activeTodosCount} itemsLeft</p>
         <p className='footer-data' onClick={this.allTodos}>All</p>
         <p className='footer-data' onClick={this.activeTodos}>Active</p>
         <p className='footer-data' onClick={this.completedTodos}>Completed</p>
         <p onClick={todoStoreForAPI.onClearCompleted}>Clear completed</p>
        </div>);
    }
}

export default TodoFooter;
