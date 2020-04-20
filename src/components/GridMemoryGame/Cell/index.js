import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import gameStore from '../../../stores/GameStore';
import themeStoreForGridgame from '../../../stores/ThemeStoreForGridGame';
import { EachCell } from '../CssStylings';

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

      const { resetGame, level } = gameStore;
      const gridSize = level + 3;

      this.timeOutId = setTimeout(() => {
         this.shouldShowHiddenCells = false;
         this.timeOutIdReset = setTimeout(() => {
            resetGame();
            this.shouldShowHiddenCells = true;
         }, ((gridSize) * 2000));
      }, ((gridSize) * 1000));

   }

   componentWillUnmount() {
      clearTimeout(this.timeOutId);
      clearTimeout(this.timeOutIdReset);
      clearTimeout(this.timeOutIdForOnClick);
   }

   eachCellColor = () => {
      const { props: { cell: { isHidden } }, isClickedOnCell, shouldShowHiddenCells } = this;
      const { selectedTheme } = themeStoreForGridgame;
      if (isHidden && (isClickedOnCell || shouldShowHiddenCells)) {
         this.cellColor = selectedTheme === 'Light' ? 'green' : '#4fd1c5';
      }

      else if (!isHidden && isClickedOnCell) {
         this.cellColor = 'red';
      }
      else {
         this.cellColor = selectedTheme === 'Light' ? '#294264' : '#2c5282';
      }
   }

   onCellClick = () => {
      const { isHidden } = this.props;
      this.timeOutIdForOnClick = setTimeout(() => { gameStore.onCellClick(isHidden) }, 300);
      this.isClickedOnCell = true;
      this.shouldShowHiddenCells = true;
   }

   render() {
      this.eachCellColor();
      const { props: { cell: { isHidden } }, shouldShowHiddenCells, cellColor, onCellClick } = this;
      const { level, gridsData } = gameStore;
      const gridSize = level + 3;
      const wholeGridWidth = gridsData[level].gridWidth;
      let width = (wholeGridWidth / (gridSize)) - 4;

      return (<EachCell disabled={shouldShowHiddenCells} 
               cellColor={cellColor} cellWidth={width} shouldShowHiddenCells={shouldShowHiddenCells} 
               isHidden = {isHidden} onClick={onCellClick}>
               </EachCell>);
   }
}
export default Cell;
