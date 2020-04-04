import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { SearchBarAlignment, SearchBarColor, InputTag } from '../Css/Css.js'
class SearchCountry extends React.Component {
    render() {
        return (<div>
      <SearchBarAlignment className={this.props.changeThemeLight}><SearchBarColor><IoIosSearch/></SearchBarColor>
      <InputTag className={`${this.props.changeThemeLight} border-radius`} type='text' placeholder='Search for a country...' onChange={this.props.onChangeSearchText}/>
      </SearchBarAlignment>
      </div>);
    }
}
export { SearchCountry };
