/*global fetch */
import React from 'react';
let listOfRegions = [];
let url = 'https://restcountries.eu/rest/v2/all';
class CountriesPractice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch(url)
            .then(response => response.json())
            .then(json => this.getCountries(json));
    }

    getCountries = (json) => {
        json.forEach(item => {
            //    this.state.items.push(item); //to get objects 
            this.state.items.push(item.region); //to get regions
            //console.log(item.region);

        });
        let uniqueRegions = [...new Set(this.state.items)];
        console.log(uniqueRegions);
    }

    render() {
        return (
            <div>{this.state.items}</div>
        );
    }
}

export { CountriesPractice };
