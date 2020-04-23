import { observable } from 'mobx';

class TodoModelForAPI {
    @observable title
    @observable isChecked
    id
    constructor(todoObject) {
        this.id = todoObject.id;
        this.title = todoObject.title;
        this.isChecked = todoObject.isChecked;
    }
    onCompletedTodo = () => {
        this.isChecked = !this.isChecked;
    }
    updateText = (input) => {
        this.title = input;
    }
}
export default TodoModelForAPI;
