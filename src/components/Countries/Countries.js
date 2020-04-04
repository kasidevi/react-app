import React from 'react';
import CountryCard from '../CountryCard/CountryCard.js';
import { AllCountries } from '../Css/Css.js'
class Countries extends React.Component {
    render() {
        return <AllCountries>{this.props.countries.map(item => <div><CountryCard eachCountryCard={item} selectedTheme={this.props.selectedTheme} changeThemeLight={this.props.changeThemeLight}/></div>)}</AllCountries>;
    }
}
export { Countries };
