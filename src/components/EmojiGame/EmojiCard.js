import React from 'react';
import { EachEmoji, DivForEmojiCard, EmojiName } from '../EmojiGameCss/EmojiGameCss.js';
class EmojiCard extends React.Component {
    render() {
        const { emoji, onEmojiClick, selectedTheme } = this.props;
        return (<DivForEmojiCard onClick={onEmojiClick} selectedTheme={selectedTheme}>
        <EachEmoji src={emoji.image} />
        <EmojiName>{emoji.name}</EmojiName>
        </DivForEmojiCard>);
    }
}
export default EmojiCard;
