import { observable } from 'mobx';

class GridCellModel {
    @observable isHidden
    id
    constructor(object) {
        this.id = object.id;
        this.isHidden = object.isHidden;
    }
}

export default GridCellModel;
