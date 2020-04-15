import React from 'react';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';

class GameStore {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    //@observable setGridCells
    constructor() {
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
    }

    onCellClick = () => {}

    setGridCells = () => {
        console.log('setGridCells');
    }

    goToNextLevelAndUpdateCells = () => {}

    goToInitialLevelAndUpdateCells = () => {}

    resetSelectedCellsCount = () => {}

    incrementSelectedCellsCount = () => {}

    onPlayAgainClick = () => {}

    resetGame = () => {}

    setTopLevel = () => {}
}

const gameStore = new GameStore();
export default gameStore;
