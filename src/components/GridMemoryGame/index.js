import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import Header from './Header';
import GameFeild from './GameField';
import GameResult from './GameResult';
import { GridMemoryGameMainDiv } from './CssStylings';
import gameStore from '../../stores/GameStore';
import themeStoreForGridgame from '../../stores/ThemeStoreForGridGame';

@observer
class GridMemoryGame extends React.Component {

    render() {
        return (<GridMemoryGameMainDiv theme={themeStoreForGridgame.selectedTheme}>
        <Header/>
        {gameStore.isGameCompleted?<GameResult/>:<GameFeild/>}
        </GridMemoryGameMainDiv>);
    }
}

export default GridMemoryGame;
