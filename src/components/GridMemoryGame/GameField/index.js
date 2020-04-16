import React from 'react';
import { observer } from 'mobx-react';
import Cell from '../Cell';
import { AllCells } from '../CssStylings';
import GridData from '../../../stores/GridData';
import gameStore from '../../../stores/GameStore';

@observer
class GameFeild extends React.Component {
    render() {
        return (<AllCells>{gameStore.currentLevelGridCells.map(cell=><Cell key={Math.random()} id={cell.id} isHidden={cell.isHidden} cell={cell}/>)}</AllCells>);
    }
}

export default GameFeild;
