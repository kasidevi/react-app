import React from 'react';
import { observer } from 'mobx-react';

import gameStore from '../../../stores/GameStore';
import themeStoreForGridgame from '../../../stores/ThemeStoreForGridGame';

import { HeaderDiv, TopLevelHeading, ThemeAndLevel, Level, Theme } from '../CssStylings';

@observer
class Header extends React.Component {

    render() {
        const { level, topLevel, gridsData } = gameStore;
        const { selectedTheme, updateTheme } = themeStoreForGridgame;

        return (<HeaderDiv>
        <TopLevelHeading>Top Level: {topLevel}</TopLevelHeading>
        <ThemeAndLevel width={gridsData[level]}>
        <Level>Level: {level}</Level>
        <Theme theme={selectedTheme} onClick={updateTheme}>Mode: {selectedTheme==='Dark'?'Dark':'Light'}</Theme>
        </ThemeAndLevel>
        </HeaderDiv>);
    }

}

export default Header;
