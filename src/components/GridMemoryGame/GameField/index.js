import React from 'react';
import { observer } from 'mobx-react';
import gameStore from '../../../stores/GameStore';
import Cell from '../Cell';
import { AllCells } from '../CssStylings';

@observer
class GameFeild extends React.Component {

    render() {

        const { level, currentLevelGridCells, gridsData } = gameStore;

        return <AllCells width={gridsData[level]}>{currentLevelGridCells.map(cell=>
        <Cell  key={Math.random()} id={cell.id} isHidden={cell.isHidden} cell={cell}/>)}
        </AllCells>;

    }
}

export default GameFeild;
