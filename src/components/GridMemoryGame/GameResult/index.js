import React from 'react';
import { GameResultMainDiv, LevelDisplayInFinal, CongratsMsg, PlayAgainButton } from '../CssStylings';
import gameStore from '../../../stores/GameStore';
class GameResult extends React.Component {
    render() {
        return (<GameResultMainDiv>
        <LevelDisplayInFinal></LevelDisplayInFinal>
        <CongratsMsg>Congratualtions! You completed all the levels.</CongratsMsg>
        <PlayAgainButton onClick={gameStore.onPlayAgainClick()}>Play Again</PlayAgainButton>
        </GameResultMainDiv>);
    }
}

export default GameResult;
