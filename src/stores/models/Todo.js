import React from 'react';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

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
