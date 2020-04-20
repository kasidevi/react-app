import shuffle from 'shuffle-array';
import { observable } from 'mobx';

import Cell from '../models/Cell';
import { gridsData } from '../GridData';

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

    onCellClick = (isHidden) => {
        if (isHidden) {
            const noOfGrids = this.level + 3;

            this.incrementSelectedCellsCount();
            if (this.selectedCellsCount === noOfGrids && this.level === 7) {
                this.isGameCompleted = true;
            }
            else if (this.selectedCellsCount === noOfGrids) {
                this.isGameCompleted = false;
                this.goToNextLevelAndUpdateCells();
            }
        }
        else {
            this.goToInitialLevelAndUpdateCells();
        }
    }
    setGridCells = () => {
        const noOfGrids = this.level + 3;

        let ary = [];
        for (let i = 0; i < (noOfGrids) ** 2; i++) {
            let object = {};
            object.id = Math.random();
            object.isHidden = false;
            const newCell = new Cell(object);
            ary.push(newCell);
        }
        for (let i = 0; i < noOfGrids; i++) {
            ary[i].isHidden = true;
        }
        shuffle(ary);
        this.currentLevelGridCells = ary;
    }

    goToNextLevelAndUpdateCells = () => {
        this.level++;
        this.resetSelectedCellsCount();
        this.currentLevelGridCells = [];
        this.setGridCells();
    }

    goToInitialLevelAndUpdateCells = () => {
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
