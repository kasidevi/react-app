import React from "react";
import { CounterHeading, Body, OperationPart, Increment, InputText, Decrement } from './css.js';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class CounterUsingMobx extends React.Component {
    @observable count = 0;
    onIncrement = () => {
        this.count++;
    }
    onDecrement = () => {
        this.count--;
    }
    onChangeCount = (event) => {
        this.count = event.target.value;
        return this.count;
    }

    render() {
        return (<Body>
        <CounterHeading>Counter</CounterHeading>
        <OperationPart>
        <Increment onClick={this.onIncrement}>+</Increment>
        <InputText type='number' value={this.count} onChange={this.onChangeCount}/>
        <Decrement onClick={this.onDecrement}>-</Decrement>
        </OperationPart>
        </Body>);
    }

}

export default CounterUsingMobx;
