import React from 'react';
//import { EmojiHeader, EmojiHeaderLeftPart } from '../EmojiGameCss/EmojiGameCss.js';
import shuffle from 'shuffle-array';
import Header from './Header.js';
import EmojiCard from './EmojiCard';
import HowToPlay from './HowToPlay.js';
import WinOrLose from './WinOrLose.js';
import { DivTagWithFlexRow } from '../EmojiGameCss/EmojiGameCss.js';
class EmojiGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [{ id: 1, isClicked: false, name: 'Exploding Head', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png' },
                { id: 2, isClicked: false, name: 'Grinning Face with Sweat', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png' },
                { id: 3, isClicked: false, name: 'Smiling Face With Heart-Eyes', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png' },
                { id: 4, isClicked: false, name: 'Smirking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png' },
                { id: 5, isClicked: false, name: 'Thinking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png' },
                { id: 6, isClicked: false, name: 'Winking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png' },
                { id: 7, isClicked: false, name: 'Grinning Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png' },
                { id: 8, isClicked: false, name: 'Crying Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png' },
                { id: 9, isClicked: false, name: 'Astonished Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png' },
                { id: 10, isClicked: false, name: 'Face with Tears of Joy', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png' },
                { id: 11, isClicked: false, name: 'Star-Struck', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png' },
                { id: 12, isClicked: false, name: 'Winking Face With Tongue', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png' },
            ],
            score: 0,
            topScore: 0,
            gameState: 'PLAYING',
            stateForWinOrLose: false
        };
    }
    onEmojiClick = (emoji) => {
        let { score } = this.state;
        if (emoji.isClicked) {
            this.setState({ gameState: false });
            this.setState({ stateForWinOrLose: true });
            // <WinOrLose score={score} gameState={this.state.gameState}/>;
        }
        else {
            emoji.isClicked = true;
            this.incrementScore();
            this.shuffleEmojis();
            if (score === 12) {
                this.setState({ gameState: true });
                this.setState({ stateForWinOrLose: true });
                //   <WinOrLose score={score} gameState={this.state.gameState}/>;
            }
        }
    }
    shuffleEmojis = () => {
        shuffle(this.state.emojis);
    }
    incrementScore = () => {
        this.setState({ score: this.state.score + 1 });
    }
    onPlayAgainClick = () => {
        this.resetGame();
    }
    resetGame = () => {
        this.state.emojis.forEach(emoji => { emoji.isClicked = false });
        this.setState({ score: 0 });
        this.setTopScore();
        this.setState({ stateForWinOrLose: false });
    }
    setTopScore = () => {
        if (this.state.score > this.state.topScore)
            this.setState({ topScore: this.state.score });
    }
    onChangeTheme = () => {}
    render() {
        let { stateForWinOrLose, gameState, score, topScore, emojis } = this.state;
        return (<div>
            <Header score={score} topScore={topScore} /> {/*//add selectedTheme,onChangeTheme*/}
            {stateForWinOrLose?<WinOrLose score={score} gameState={this.state.gameState} onPlayAgainClick={this.onPlayAgainClick}/>:<DivTagWithFlexRow>{emojis.map(emoji=><EmojiCard emoji={emoji} onEmojiClick={()=>this.onEmojiClick(emoji)}/>)}</DivTagWithFlexRow>}
            <HowToPlay />
        </div>);
    }
}

export default EmojiGame;
