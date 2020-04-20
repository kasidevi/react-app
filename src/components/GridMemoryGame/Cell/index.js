import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { EachCell } from '../CssStylings';
import gameStore from '../../../stores/GameStore';
import themeStoreForGridgame from '../../../stores/ThemeStoreForGridGame';

@observer
class Cell extends React.Component {
   @observable shouldShowHiddenCells
   @observable isClickedOnCell
   @observable Disabled
   timeOutId;
   timeOutIdReset;
   timeOutIdForOnClick;
   cellColor = '';
   constructor(props) {
      super(props);
      this.shouldShowHiddenCells = true;
      this.isClickedOnCell = false;
      this.Disabled = false;
   }

   componentDidMount() {
      this.timeOutId = setTimeout(() => {
         this.shouldShowHiddenCells = false;
         this.timeOutIdReset = setTimeout(() => {
            gameStore.resetGame();
            this.shouldShowHiddenCells = true;
         }, ((gameStore.level + 3) * 2000));
      }, ((gameStore.level + 3) * 1000));
   }

   componentWillUnmount() {
      clearTimeout(this.timeOutId);
      clearTimeout(this.timeOutIdReset);
      clearTimeout(this.timeOutIdForOnClick);
   }

   eachCellColor = () => {
      const { props: { cell: { isHidden } }, isClickedOnCell, shouldShowHiddenCells } = this;
      if (isHidden && (isClickedOnCell || shouldShowHiddenCells)) {
         this.cellColor = themeStoreForGridgame.selectedTheme === 'Light' ? 'green' : '#4fd1c5';
      }

      else if (!isHidden && isClickedOnCell) {
         this.cellColor = 'red';
      }
      else {
         this.cellColor = themeStoreForGridgame.selectedTheme === 'Light' ? '#294264' : '#2c5282';
      }
   }

   onCellClick = () => {
      const { id, isHidden } = this.props;
      this.timeOutIdForOnClick = setTimeout(() => { gameStore.onCellClick(id, isHidden) }, 300);
      this.isClickedOnCell = true;
      this.shouldShowHiddenCells = true;
   }

   render() {
      this.eachCellColor();
      const { isHidden } = this.props;
      const level = gameStore.level;
      let width = ((gameStore.gridsData[level].gridWidth) / (level + 3)) - 4;
      return (<EachCell disabled={this.shouldShowHiddenCells} cellColor={this.cellColor} cellWidth={width} shouldShowHiddenCells={this.shouldShowHiddenCells} isHidden = {isHidden} onClick={this.onCellClick}></EachCell>);
   }
}
export default Cell;
