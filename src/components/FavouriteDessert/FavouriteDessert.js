import React from 'react';
let dessertList = ["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"];
let updatedDessert;
class FavouriteDessert extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedDessert: false, favoriteDessert: '' };
    }
    handleUserInput = (event) => {
        this.setState({ favoriteDessert: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.displayMessage();
    }
    displayMessage = () => {
        updatedDessert = this.state.favoriteDessert;
        this.setState({ selectedDessert: true });
    }
    renderDessertOptions = () => {
        return dessertList.map((list) =>
            <p><label><input className='radio-buttons' name='radioButton'type='radio' value={list}/>
        {list}</label></p>);

    }
    render() {
        return <div>
        <h2><span><i class="material-icons">&#xe5c4;</i></span>Favourite Dessert</h2>
      
        <form>
        <div className='display-greetings'>
        <p>What is your favorite dessert?</p>
        <div onChange={this.handleUserInput}>{this.renderDessertOptions()}</div>
        <button type="submit" onClick={this.handleSubmit} >Make your choice</button>
         <p>{this.state.selectedDessert?`My favorite dessert is ${updatedDessert} `:''}</p>
        </div>
       
        </form></div>;
    }
}

export { FavouriteDessert };
