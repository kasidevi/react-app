import React from 'react';
import { SearchCountry } from '../SearchCountry/SearchCountry.js';
import { SelectRegion } from '../SelectRegion/SelectRegion.js';
import { SearchCountryAndSelectedRegion } from '../Css/Css.js'
class CountriesFilterBar extends React.Component {
    render() {
        return (<SearchCountryAndSelectedRegion>
        <SearchCountry onChangeSearchText={this.props.onChangeSearchText} 
                       searchText={this.props.searchText} 
                       selectedTheme={this.props.selectedTheme}
                       changeThemeLight={this.props.changeThemeLight}/>
        <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion}
                      regionOptions={this.props.regionOptions}
                      selectedRegion={this.props.selectedRegion}
                      selectedTheme={this.props.selectedTheme}
                      changeThemeLight={this.props.changeThemeLight}/>
        
        </SearchCountryAndSelectedRegion>);
    }
}
export { CountriesFilterBar };
