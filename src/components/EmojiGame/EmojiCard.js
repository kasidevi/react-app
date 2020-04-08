import React from 'react';
import { EachEmoji, DivForEmojiCard, EmojiName } from '../EmojiGameCss/EmojiGameCss.js';
class EmojiCard extends React.Component {
<<<<<<< HEAD
   render() {

        const { emoji, onEmojiClick } = this.props;
        return (<DivTagWithFlexcol onClick={onEmojiClick}>
            <EachEmoji src={emoji.image} />
            <PTag>{emoji.name}</PTag>
        </DivTagWithFlexcol>);
=======
    render() {
        const { emoji, onEmojiClick, selectedTheme } = this.props;
        return (<DivForEmojiCard onClick={onEmojiClick} selectedTheme={selectedTheme}>
        <EachEmoji src={emoji.image} />
        <EmojiName>{emoji.name}</EmojiName>
        </DivForEmojiCard>);
>>>>>>> dbc19e90608783434d05eec63722c31a8aa312cb
    }
}
export default EmojiCard;
