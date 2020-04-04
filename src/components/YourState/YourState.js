import React from 'react';
let stateList = ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"];
let updatedCity;
class YourState extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedState: 'Select YourState', submittedState: false };
    }
    handleChangeState = (event) => {
        this.setState({ selectedState: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.displayMessage();
    }
    displayMessage = () => {
        this.setState({ submittedState: true });
        updatedCity = this.state.selectedState;
    }
    renderList = () => {
        return stateList.map((list) => <option value={list}>{list}</option>);
    }
    render() {
        return <div>
        <h2><span><i class="material-icons">&#xe5c4;</i></span>Your State</h2>
        <form>
        <select onChange={this.handleChangeState} value={this.selectedState}>{this.renderList()}</select>
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
        <p>{this.state.submittedState?`I'm from ${updatedCity} state`:''}</p>
        </form>
        </div>;
    }
}

export { YourState };
