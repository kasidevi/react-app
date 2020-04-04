import React from 'react';
import { TextTag, HeaderForEmojiGame } from '../EmojiGameCss/EmojiGameCss.js';
class Header extends React.Component {
    render() {
        const { score, topScore } = this.props;
        return (<HeaderForEmojiGame>
        <TextTag>Emoji Game</TextTag>
        <HeaderForEmojiGame>
        <TextTag>Score:{score}</TextTag>
        <TextTag>TopScore:{topScore}</TextTag>
        <TextTag>Theme</TextTag>
        </HeaderForEmojiGame>
        </HeaderForEmojiGame>);
    }
}
export default Header;
