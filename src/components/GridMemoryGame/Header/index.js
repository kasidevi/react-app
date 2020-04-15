import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { HeaderDiv, TopLevelHeading, ThemeAndLevel, Level, Theme } from '../CssStylings'
import gameStore from '../../../stores/GameStore'
@observer
class Header extends React.Component {
    onChangeSelectedTheme = () => {}
    render() {
        return (<HeaderDiv>
        <TopLevelHeading>Top Level: {gameStore.level}</TopLevelHeading>
        <ThemeAndLevel>
        <Level>Level: {gameStore.topLevel}</Level>
        <Theme>Mode:</Theme>
        </ThemeAndLevel>
        </HeaderDiv>);
    }
}

export default Header;
