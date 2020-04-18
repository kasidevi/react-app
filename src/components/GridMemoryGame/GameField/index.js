import React from 'react';
import { observer } from 'mobx-react';
import Cell from '../Cell';
import { AllCells } from '../CssStylings';
import GridData from '../../../stores/GridData';
import gameStore from '../../../stores/GameStore';

@observer
class GameFeild extends React.Component {

    // componentDidMount() {
    //     this.timeOutId = setTimeout(() => { gameStore.goToInitialLevelAndUpdateCells }, ((gameStore.level * 1000) + 3000));
    // }
    componentWillUnMount() {
        clearTimeout(this.timeOutId);
    }

    render() {
        const level = gameStore.level;
        this.timeOutId = setTimeout(() => { gameStore.resetGame }, ((gameStore.level * 1000) + 6000));
        return <AllCells width={gameStore.gridsData[level]}>{gameStore.currentLevelGridCells.map(cell=>
        <Cell  key={Math.random()} id={cell.id} isHidden={cell.isHidden} cell={cell}/>)}
        </AllCells>;
    }
}

export default GameFeild;
