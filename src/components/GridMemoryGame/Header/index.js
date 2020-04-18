import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { HeaderDiv, TopLevelHeading, ThemeAndLevel, Level, Theme } from '../CssStylings';
import gameStore from '../../../stores/GameStore';
import themeStoreForGridgame from '../../../stores/ThemeStoreForGridGame';

@observer
class Header extends React.Component {
    onChangeSelectedTheme = () => {}
    render() {
        const level = gameStore.level;
        return (<HeaderDiv>
        <TopLevelHeading>Top Level: {gameStore.topLevel}</TopLevelHeading>
        <ThemeAndLevel width={gameStore.gridsData[level]}>
        <Level>Level: {gameStore.level}</Level>
        <Theme theme={themeStoreForGridgame.selectedTheme} onClick={themeStoreForGridgame.updateTheme}>Mode:{themeStoreForGridgame.selectedTheme==='Dark'?'Dark':'Light'}</Theme>
        </ThemeAndLevel>
        </HeaderDiv>);
    }
}

export default Header;
