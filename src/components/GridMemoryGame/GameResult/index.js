import React from 'react';

import gameStore from '../../../stores/GameStore';

import { GameResultMainDiv, LevelDisplayInFinal, CongratsMsg, PlayAgainButton } from '../CssStylings';

class GameResult extends React.Component {

    playAgain = () => {
        const { onPlayAgainClick } = gameStore;
        onPlayAgainClick();
    }

    render() {
        return (<GameResultMainDiv>
        <LevelDisplayInFinal>7</LevelDisplayInFinal>
        <CongratsMsg>Congratualtions! You completed all the levels.</CongratsMsg>
        <PlayAgainButton onClick={this.playAgain}>Play Again</PlayAgainButton>
        </GameResultMainDiv>);
    }

}

export default GameResult;
