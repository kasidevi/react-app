import React from 'react';
import { TextTag, PTag, DivForFooter } from '../EmojiGameCss/EmojiGameCss.js'

class HowToPlay extends React.Component {
    render() {
        return (<DivForFooter><TextTag>How to play?</TextTag> 
                <PTag > Get points by clicking on an image but don 't click on any image more tahn once!</PTag>
                </DivForFooter>);

    }
}
export default HowToPlay;
