import React from 'react';
import { observable } from 'mobx';

class GridCellModel {
    @observable isHidden
    id
    constructor(object) {
        this.id = object.id;
        this.isHidden = object.isChecked;
    }
}

export default GridCellModel;
