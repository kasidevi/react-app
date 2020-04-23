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
    onChangeInputText = (text) => {
        this.inputText = text;
    }
    onChangeCheckBox = () => {
        this.isChecked = !this.isChecked;
    }
}

export default TodoModel;
    