import React from 'react';
import shuffle from 'shuffle-array';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import Cell from '../models/Cell';
class GameStore {
    @observable level
    @observable topLevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    @observable copyOfCurrentLevelGridCells
    //@observable setGridCells
    constructor() {
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        // this.copyOfCurrentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.setGridCells();
    }

    onCellClick = (id, isHidden) => {
        if (isHidden) {
            this.incrementSelectedCellsCount();
            console.log(id, true);

            if (this.selectedCellsCount === this.level + 3 && this.level === 6) {
                alert('all levels completed');
                this.isGameCompleted = true;
                this.goToInitialLevelAndUpdateCells();
            }
            else if (this.selectedCellsCount === this.level + 3) {
                this.isGameCompleted = false;
                this.goToNextLevelAndUpdateCells();
            }
        }
        else {
            //  console.log(id, false);
            //   this.isGameCompleted = false;
            this.goToInitialLevelAndUpdateCells();
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
        console.log('store', this.currentLevelGridCells);

        // this.currentLevelGridCells.Math.random();

        // if (this.level === 8)
        //      this.goToNextLevelAndUpdateCells();
        // else
        //     this.goToInitialLevelAndUpdateCells();
    }

    goToNextLevelAndUpdateCells = () => {
        this.level++;
        this.resetSelectedCellsCount();
        this.currentLevelGridCells = [];
        this.setGridCells();
    }

    goToInitialLevelAndUpdateCells = () => {
        // this.isGameCompleted = false;
        this.setTopLevel();
        this.level = 0;
        this.resetSelectedCellsCount();
        this.currentLevelGridCells = [];
        this.setGridCells();
    }

    resetSelectedCellsCount = () => {
        this.selectedCellsCount = 0;
    }

    incrementSelectedCellsCount = () => {
        this.selectedCellsCount++;
    }

    onPlayAgainClick = () => {
        alert('playagain')
        this.resetGame();
    }

    resetGame = () => {
        this.goToInitialLevelAndUpdateCells();
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
