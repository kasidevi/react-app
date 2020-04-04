import React from 'react';
import { DivTagWithFlexcol, TextTag, PlayAgainButton } from '../EmojiGameCss/EmojiGameCss.js';

class WinOrLose extends React.Component {
    render() {
        const { score, gameState, onPlayAgainClick } = this.props;
        return (<DivTagWithFlexcol>
        <TextTag>{score}</TextTag>
        {this.gameState?<TextTag>You Won!</TextTag>:<TextTag>You Lose!</TextTag>}
        <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
        </DivTagWithFlexcol>);
    }
}
export default WinOrLose;
