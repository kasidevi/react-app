import React from 'react';
let inputValue;
class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInputText: '', displayName: false };
    }
    handleUserInput = (event) => {
        this.setState({ userInputText: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.userInputText.trim() !== '') {
            this.displayMessage();
        }
        else {
            this.setState({ displayName: false });
        }
        inputValue = this.state.userInputText;
        this.setState({ userInputText: '' });
    }

    displayMessage = () => {
        this.setState({ displayName: true });
    }
    render() {
        return <div>
        <h2><span><i class="material-icons">&#xe5c4;</i></span>Greetings</h2>
        <div className='display-greetings'>
        <form onSumbit={this.handleSubmit}>
        <input type='text' value={this.state.userInputText} placeholder='Enter the name' onChange={this.handleUserInput}/>
        <button type='submit' onClick={this.handleSubmit} >Greet</button>
        <p>{this.state.displayName?`Hello ${inputValue}, have a nice day!`:''}</p>
       </form>
        </div>
        </div>;
    }
}
export { Greetings };
