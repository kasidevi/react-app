import React from 'react';
let cityList = ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"];
let updatedList = [];
let listOfVistedCities = [];
class VisitedCities extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visitedCities: [], selectedCities: [], cityOptions: false };
    }
    handleCheckboxClick = (event) => {
        if (event.target.checked) {
            listOfVistedCities.push(event.target.value);
        }
        else {
            listOfVistedCities.splice(event.target.value, 1);
        }
        //this.setState({ visitedCities: this.state.visitedCities.push(event.target.value) });
        // alert(this.state.visitedCities);
        //this.state.visitedCities.filter((filterStatus) => (filterStatus));
    }
    handleSubmit = (event) => {
        alert(this.state.selectedCities);
        event.preventDefault();
        this.setState({ selectedCities: listOfVistedCities });
        this.displayVisitedCitiesMessage();
    }
    displayVisitedCitiesMessage = () => {
        updatedList = this.state.selectedCities;
        this.setState({ cityOptions: true });
    }
    renderCityOptions = () => {
        return cityList.map((cities) => <p><label><input onClick={this.handleCheckboxClick}  type='checkbox' value={cities}/>{cities}</label></p>);
    }
    render() {
        return <div> 
           <h2><span><i class="material-icons">&#xe5c4;</i></span>Visited Cities</h2>
        <form>
           <p>which of the following cities you have visited?</p>
           <div>{this.renderCityOptions()}</div>
           <button onClick={this.handleSubmit} type='submit'>Make your choice</button>
           <p>{this.state.cityOptions?`I visited these cities ${updatedList}`:''}</p>
        </form>     
        </div>;
    }
}

export { VisitedCities };
