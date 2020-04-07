import React from 'react';
import { DivForWinOrLose, TextTag, PlayAgainButton, YouWon, YouLose } from '../EmojiGameCss/EmojiGameCss.js';

class WinOrLose extends React.Component {
    render() {
        const { score, gameState, onPlayAgainClick, selectedTheme } = this.props;
        return (<DivForWinOrLose selectedTheme={selectedTheme}>
        <TextTag>{score}</TextTag>
        {gameState?<YouWon>You Won!</YouWon>:<YouLose>You Lose!</YouLose>}
        <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
        </DivForWinOrLose>);
    }
}
export default WinOrLose;
