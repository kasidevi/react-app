import React from 'react';
import { observer } from 'mobx-react';
import gameStore from '../../stores/GameStore';
import themeStoreForGridgame from '../../stores/ThemeStoreForGridGame';
import Header from './Header';
import GameFeild from './GameField';
import GameResult from './GameResult';
import { GridMemoryGameMainDiv } from './CssStylings';

@observer
class GridMemoryGame extends React.Component {

    render() {
        const { isGameCompleted } = gameStore;
        const { selectedTheme } = themeStoreForGridgame;

        return (<GridMemoryGameMainDiv theme={selectedTheme}>
        <Header/>
        {isGameCompleted?<GameResult/>:<GameFeild/>}
        </GridMemoryGameMainDiv>);

    }
}

export default GridMemoryGame;
