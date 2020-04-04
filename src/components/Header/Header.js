import React from 'react';
import { HeaderSection } from '../Css/Css.js'
class Header extends React.Component {

    render() {
        return (<HeaderSection className={`${this.props.changeThemeLight}`}>
        <h3>Where in the world?</h3>
        <span className='light-mode' onClick={this.props.onChangeTheme}>{this.props.selectedTheme?'☾ Light Mode':' ☾ Dark Mode'}</span>
        </HeaderSection>);
    }
}

export { Header };
