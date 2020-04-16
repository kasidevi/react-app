import React from 'react';
import { EachCell } from '../CssStylings';
import gameStore from '../../../stores/GameStore';
class Cell extends React.Component {
    isHiddenOrNot = () => {
        gameStore.onCellClick(this.props.id,this.props.isHidden);
    }
    render() {
        //return (<EachCell onClick={gameStore.onCellClick(this.props.id)}></EachCell>);
        return (<EachCell onClick={this.isHiddenOrNot}></EachCell>);
    }
}
export default Cell;
