import React from 'react';
//import { EmojiHeader, EmojiHeaderLeftPart } from '../EmojiGameCss/EmojiGameCss.js';
import shuffle from 'shuffle-array';
import Header from './Header.js';
import EmojiCard from './EmojiCard';
import HowToPlay from './HowToPlay.js';
import WinOrLose from './WinOrLose.js';
import { DivTagWithFlexRow, MainDiv } from '../EmojiGameCss/EmojiGameCss.js';
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
            selectedTheme: 'light',
            stateForWinOrLose: false
        };
    }
    onEmojiClick = (emoji) => {
        let { score } = this.state;
        if (emoji.isClicked && score !== 12) {
            this.setState({ gameState: false });
            this.setState({ stateForWinOrLose: true });
        }
        else if (emoji.isClicked && score === 12) {
            this.setState({ gameState: true });
            this.setState({ stateForWinOrLose: true });
        }
        else {
            this.setState({ gameState: true });
            emoji.isClicked = true;
            this.incrementScore();
            this.shuffleEmojis();
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
    onChangeTheme = () => {
        if (this.state.selectedTheme === 'light')
            this.setState({ selectedTheme: 'dark' });
        else
            this.setState({ selectedTheme: 'light' });
    }
    render() {
        let { stateForWinOrLose, selectedTheme, gameState, score, topScore, emojis } = this.state;
        return (<MainDiv selectedTheme={selectedTheme}>
            <Header score={score} topScore={topScore} selectedTheme={selectedTheme} onChangeTheme={this.onChangeTheme}/> 
            {stateForWinOrLose?<WinOrLose selectedTheme={selectedTheme} score={score} gameState={gameState} onPlayAgainClick={this.onPlayAgainClick}/>:<DivTagWithFlexRow>{emojis.map(emoji=><EmojiCard selectedTheme={selectedTheme} emoji={emoji} onEmojiClick={()=>this.onEmojiClick(emoji)}/>)}</DivTagWithFlexRow>}
            <HowToPlay selectedTheme={selectedTheme}/>
        </MainDiv>);
    }
}

export default EmojiGame;
