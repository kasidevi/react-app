import React from 'react';
import { TextTag, HeaderForEmojiGame, ChangingTheme, EmojiGameHeading } from '../EmojiGameCss/EmojiGameCss.js';
class Header extends React.Component {
    render() {
        const { score, topScore, selectedTheme, onChangeTheme } = this.props;
        return (<HeaderForEmojiGame selectedTheme={selectedTheme}>
        <EmojiGameHeading>Emoji Game</EmojiGameHeading>
        <HeaderForEmojiGame selectedTheme={selectedTheme}>
        <TextTag>Score:{score}</TextTag>
        <TextTag>Top Score:{topScore}</TextTag>
        <ChangingTheme onClick={onChangeTheme} selectedTheme={selectedTheme}>{selectedTheme==='light'?'DARK THEME':'LIGHT THEME'}</ChangingTheme>
        </HeaderForEmojiGame>
        </HeaderForEmojiGame>);
    }
}
export default Header;
