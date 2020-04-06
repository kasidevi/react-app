import React from 'react';
import { HowToPlayHeading, HowToPlayText, DivForFooter } from '../EmojiGameCss/EmojiGameCss.js';

class HowToPlay extends React.Component {
    render() {
        let { selectedTheme } = this.props;
        return (<DivForFooter selectedTheme={selectedTheme}><HowToPlayHeading>How to play?</HowToPlayHeading> 
                <HowToPlayText> Get points by clicking on an image but don't click on any image more than once!</HowToPlayText>
                </DivForFooter>);

    }
}
export default HowToPlay;
