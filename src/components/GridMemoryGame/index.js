import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Header from './Header';
import GameFeild from './GameField';
import { GridMemoryGameMainDiv } from './CssStylings'
import gameStore from '../../stores/GameStore'

@observer
class GridMemoryGame extends React.Component {
    // constructor() {
    // gameStore.setGridCells();
    //  } 
    render() {
        return (<GridMemoryGameMainDiv>
        <Header/>
        <GameFeild/>
        </GridMemoryGameMainDiv>);
    }
}

export default GridMemoryGame;
