import React from 'react';
import shuffle from 'shuffle-array';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Cell from '../models/Cell';
import { gridsData } from '../GridData';
//import themeStoreForGridgame from '../ThemeStoreForGridgame';
class GameStore {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    @observable copyOfCurrentLevelGridCells

    constructor() {
        this.gridsData = gridsData;
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.setGridCells();
        this.array = [];
    }

    onCellClick = (id, isHidden) => {
        if (isHidden) {
            this.incrementSelectedCellsCount();
            if (this.selectedCellsCount === this.level + 3 && this.level === 7) {
                alert('all levels completed');
                this.isGameCompleted = true;
            }
            else if (this.selectedCellsCount === this.level + 3) {
                this.isGameCompleted = false;
                this.timeOutId = setTimeout(() => { this.goToNextLevelAndUpdateCells() }, 300);
            }
        }
        else {
            this.timeOutId = setTimeout(() => { this.goToInitialLevelAndUpdateCells() }, 300);
        }
    }
    setGridCells = () => {
        for (let i = 0; i < (this.level + 3) ** 2; i++) {
            let object = {};
            object.id = Math.random();
            object.isHidden = false;
            const newCell = new Cell(object);
            this.currentLevelGridCells.push(newCell);
        }
        for (let i = 0; i < this.level + 3; i++) {
            this.currentLevelGridCells[i].isHidden = true;
        }
        shuffle(this.currentLevelGridCells);
    }

    goToNextLevelAndUpdateCells = () => {
        this.level++;
        this.resetSelectedCellsCount();
        this.currentLevelGridCells = [];
        this.setGridCells();
        clearTimeout(this.timeOutId);
    }

    goToInitialLevelAndUpdateCells = () => {
        this.setTopLevel();
        this.level = 0;
        this.resetSelectedCellsCount();
        this.currentLevelGridCells = [];
        this.setGridCells();
        clearTimeout(this.timeOutId);
    }

    resetSelectedCellsCount = () => {
        this.selectedCellsCount = 0;
    }

    incrementSelectedCellsCount = () => {
        this.selectedCellsCount++;
    }

    onPlayAgainClick = () => {
        this.resetGame();
    }

    resetGame = () => {
        this.goToInitialLevelAndUpdateCells();
        this.isGameCompleted = false;
    }

    setTopLevel = () => {
        if (this.level > this.topLevel)
            this.topLevel = this.level;
        this.level = this.level;
    }
}

const gameStore = new GameStore();
export default gameStore;


/*cloud9 link
https://ap-southeast-1.console.aws.amazon.com/cloud9/ide/6a2c95664e574547b4f56465345d1a64
*/
