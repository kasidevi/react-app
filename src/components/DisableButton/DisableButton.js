import React from 'react';
class DisableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isDisableButtonChecked: false, showMessage: false };
    }
    handleUserInput = () => {
        if (this.state.isDisableButtonChecked !== true) {
            this.setState({ isDisableButtonChecked: true });
            this.setState({ showMessage: true });
            this.displayMessage();
        }
        else {
            this.setState({ isDisableButtonChecked: false });
            this.setState({ showMessage: false });
        }
        //   alert(`handleUserInput ${this.state.isDisableButtonChecked}`);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ showMessage: true });
        this.displayMessage();

    }
    displayMessage = () => {
        // alert('displayMessage');
        if (this.state.isDisableButtonChecked === true) {
            return <span>I'm disabled</span>;
        }
        else
            return <span>I'm enabled</span>;
    }
    render() {
        return <div>
        <h2><span><i class="material-icons">&#xe5c4;</i></span>Disable Button</h2>
        <div>
        <form>
        <div className='disabled-button'>
        <p><input className='disable-component' type='checkbox'  onClick={this.handleUserInput}/>Disabled</p>
        <button className='disable-component' type="submit" disabled={this.state.isDisableButtonChecked} onClick={this.handleSubmit}>Click Me</button>
      </div>
        <p>{this.state.showMessage?this.displayMessage():''}</p>
        </form>
        </div>
        </div>;
    }
}

export { DisableButton };
