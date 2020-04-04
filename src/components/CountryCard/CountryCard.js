import React from 'react';
import { withRouter } from "react-router-dom";
import { FlagImage, EachCountryChild, EachCountry, Para } from '../Css/Css.js';
class CountryCard extends React.Component {
    navigateLink = () => {
        let { history } = this.props;
        history.push(`/country-dashboard-app/details/${this.props.eachCountryCard.alpha3Code}`);
    }
    render() {
        return (
            <EachCountry  onClick={this.navigateLink} className={`${this.props.changeThemeLight}`}>
          <FlagImage src={this.props.eachCountryCard.flag} alt={this.props.eachCountryCard.altSpelling} />
          <EachCountryChild> 
          <h4><b>{this.props.eachCountryCard.name}</b></h4>
          <Para><b>Population: </b>{this.props.eachCountryCard.population}</Para>
          <Para><b>Region: </b>{this.props.eachCountryCard.region}</Para>
          <Para><b>Capital: </b>{this.props.eachCountryCard.capital}</Para>
          </EachCountryChild>
        </EachCountry>);
    }
}
export default withRouter(CountryCard);
