import React from 'react';
import { GameResultMainDiv, LevelDisplayInFinal, CongratsMsg, PlayAgainButton } from '../CssStylings';
import gameStore from '../../../stores/GameStore';
class GameResult extends React.Component {
    playAgain = () => {
        gameStore.onPlayAgainClick();
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
