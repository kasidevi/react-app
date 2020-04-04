/*global fetch*/
import React from 'react';
import { withRouter } from "react-router-dom";
import { Header } from '../Header/Header.js';
let countryStylings = {
    display: 'flex',
    margin: '5px',
};
let margin = {
    margin: '5px',
};
let margin1 = {
    margin: '0px 0px 0px 10px',

};


class CountryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countryDetails: [] };
    }
    componentDidMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => this.setState({ countryDetails: json }));
    }
    goBackFunction = () => {
        this.props.history.goBack();
    }

    call = (item, id) => {
        if (item.alpha3Code === id) {
            return <div style={countryStylings}>
            <div style={margin}>
            <img src={item.flag} alt={item.altSpelling} style={{width:'400px'}}/>
            </div>
            <div>
            <div style={countryStylings}>
            <div style={margin}>
            <h4>{item.name}</h4>
            <p><b>Native Name: </b>{item.nativeName}</p>
            <p><b>Population: </b>{item.population}</p>
            <p><b>Region: </b>{item.region}</p>
            <p><b>Sub Region: </b>{item.subregion}</p>
            <p><b>Capital: </b>{item.capital}</p>
            </div>
            <div style={margin}> 
            <p><b>Top Level Domain: </b>{item.alpha2Code}</p>
            <p><b>Currencies: </b>{item.currencies.map((items,index)=><span>{index?',':''}{items.name}</span>)}</p>
            <p><b>Languages: </b>{item.languages.map((items,index)=><span>{index?',':''}{items.name}</span>)}</p>
            </div>
            </div>
            <p style={margin1}><b>Border Countries: </b><div>{item.borders.map(items=><button className={`${this.props.changeThemeLight} border-countries`}>{this.borderNames(items)}</button>)}</div></p>
            </div>
            </div>;
        }
    }
    borderNames = (itemAlphaCode) => {
        let alpha3CodeName = this.state.countryDetails.map(item => {
            if (itemAlphaCode === item.alpha3Code)
                return item.name;
        });
        return alpha3CodeName;
    }
    render() {
        let { id } = this.props.match.params;
        return <div className={this.props.changeThemeToBody}>
        <Header  onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme} changeThemeLight={this.props.changeThemeLight}/>
         
       <button className={`${this.props.changeThemeLight} back-button`} onClick={this.goBackFunction}>← Back</button>
       
       {this.state.countryDetails.map(item=>
       <div>
       {this.call(item,id)}
       </div>
       )}
        </div>;
    }
}
export default withRouter(CountryDetails);
