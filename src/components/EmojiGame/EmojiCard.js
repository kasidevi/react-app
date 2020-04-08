import React from 'react';
import { EachEmoji, DivForEmojiCard, EmojiName } from '../EmojiGameCss/EmojiGameCss.js';
class EmojiCard extends React.Component {
    render() {

        const { emoji, onEmojiClick } = this.props;
        return (<DivTagWithFlexcol onClick={onEmojiClick}>
            <EachEmoji src={emoji.image} />
            <PTag>{emoji.name}</PTag>
        </DivTagWithFlexcol>);

    }
}
export default EmojiCard;
