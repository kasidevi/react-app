import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { EachCell } from '../CssStylings';
import gameStore from '../../../stores/GameStore';
import themeStoreForGridgame from '../../../stores/ThemeStoreForGridGame';

@observer
class Cell extends React.Component {
   @observable shouldShowHiddenCells
   @observable cellColor
   @observable isClickedOnCell
   @observable Disabled
   constructor(props) {
      super(props);
      this.shouldShowHiddenCells = true;
      this.isClickedOnCell = false;
      this.Disabled = false;
   }
   componentDidMount() {
      this.eachCellColor();
      this.timeOutId = setTimeout(() => { this.shouldShowHiddenCells = false, this.eachCellColor() }, ((gameStore.level * 1000) + 3000));
   }
   componentWillUnMount() {
      clearTimeout(this.timeOutId);
   }
   eachCellColor = () => {
      if (this.shouldShowHiddenCells) {
         if (this.props.isHidden) {
            this.cellColor = themeStoreForGridgame.selectedTheme === 'Light' ? '#68d391' : '#81e6d9';
            console.log(this.cellColor, this.isClickedOnCell, 'both true,');
         }
         else {
            this.cellColor = themeStoreForGridgame.selectedTheme === 'Light' ? '#4a5568' : '#718096';
            console.log(this.cellColor, 'true , false');
         }
      }
      else {
         this.cellColor = themeStoreForGridgame.selectedTheme === 'Light' ? '#4a5568' : '#718096';
         console.log(this.cellColor, 'both false');
      }
   }
   onCellClick = () => {
      if (!this.isClickedOnCell) {
         const { id, isHidden } = this.props;
         gameStore.onCellClick(id, isHidden);
         this.isClickedOnCell = true;
         this.cellColor = themeStoreForGridgame.selectedTheme === 'Light' ? '#68d391' : '#81e6d9';
         if (!isHidden)
            this.cellColor = 'red';
      }
   }
   render() {
      const { isHidden } = this.props;
      const level = gameStore.level;
      let width = ((gameStore.gridsData[level].gridWidth) / (level + 3)) - 4;
      return (<EachCell disabled={this.shouldShowHiddenCells} cellColor={this.cellColor} cellWidth={width} shouldShowHiddenCells={this.shouldShowHiddenCells} isHidden = {isHidden} onClick={this.onCellClick}></EachCell>);
   }
}
export default Cell;
