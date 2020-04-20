import { observable } from 'mobx';
class TodoModel {
    @observable inputText
    @observable isChecked
    id
    constructor(object) {
        this.id = object.id;
        this.inputText = object.inputText;
        this.isChecked = object.isChecked;
    }
}

export default TodoModel;
