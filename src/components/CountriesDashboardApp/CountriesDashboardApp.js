/*global fetch*/
import React from 'react';
import { Header } from '../Header/Header.js';
import '../Header/Header.css';
import { CountriesFilterBar } from '../CountriesFilterBar/CountriesFilterBar.js';
import { Countries } from '../Countries/Countries.js';
//import Loader from 'react-loader-spinner';
let regions = [];
class CountriesDashboardApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countries: [], uniqueRegions: [], searchText: '', selectedRegion: 'All' };
    }
    componentDidMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => this.getCountries(json));
    }
    getCountries = (json) => {
        this.setState({ countries: json });
        this.getRegionOptions();
    }
    getRegionOptions = () => {
        [...this.state.countries].forEach(item => {
            if (item.region !== '')
                regions.push(item.region);
        });
        regions.sort();
        regions.unshift('All');
        this.setState({ uniqueRegions: [...new Set(regions)] });
    }
    displayCountries = () => {
        if (this.state.selectedRegion === 'All' && this.state.searchText === '')
            return this.state.countries;
        else if (this.state.selectedRegion !== 'All' && this.state.searchText === '') {
            return this.filterCountriesBySelectedRegion(this.state.selectedRegion);
        }
        else if (this.state.selectedRegion !== 'All' && this.state.searchText !== '') {
            let searchData = this.filterCountriesBySearchText(this.state.searchText);
            let searchDataWithSelectedData = searchData.filter(item => item.region.toLowerCase().match(this.state.selectedRegion.toLowerCase()));
            return searchDataWithSelectedData;
        }
        else {
            return this.filterCountriesBySearchText(this.state.searchText);
        }
    }
    filterCountriesBySelectedRegion = (selectedRegion) => {
        let p = [...this.state.countries].filter(item => item.region.toLowerCase().match(selectedRegion.toLowerCase()));
        return p;
    }
    filterCountriesBySearchText = (searchText) => {
        let p = [...this.state.countries].filter(item => item.name.toLowerCase().match(searchText.toLowerCase()));
        return p;
    }

    onChangeSearchText = (event) => {
        let regex = new RegExp(/^[a-zA-z]+$/);
        if (regex.test(event.target.value)) {
            this.setState({ searchText: event.target.value });
        }
        else {
            this.setState({ searchText: this.state.searchText });
        }
    }
    onChangeSelectedRegion = (event) => {
        this.setState({ selectedRegion: event.target.value });
    }
    LoadingIndicator = () => {
        return (<div>
        <div className="spinner">
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>
        </div>);
    }
    render() {
        return (<div>
            <Header  onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme}
            changeThemeLight={this.props.changeThemeLight}/>
         <div className={this.props.changeThemeToBody}>
            <CountriesFilterBar searchText={this.state.searchText}
                                regionOptions={this.state.uniqueRegions} 
                                selectedRegion={this.state.selectedRegion} 
                                selectedTheme={this.props.selectedTheme}
                                onChangeSelectedRegion={this.onChangeSelectedRegion}
                                onChangeSearchText={this.onChangeSearchText}
                                changeThemeLight={this.props.changeThemeLight}/>
            
            
       {this.displayCountries().length>0?   <Countries  countries={this.displayCountries()} selectedTheme={this.props.selectedTheme} changeThemeLight={this.props.changeThemeLight}/>
       :<p className='countries-not-available'>{this.LoadingIndicator()}<br/> Not Found</p>
        }
       </div>
    </div>);
    }
}

export { CountriesDashboardApp };
