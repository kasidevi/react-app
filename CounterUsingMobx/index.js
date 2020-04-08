import React from "react";
import { CounterHeading, Body, OperationPart, Increment, InputText, Decrement } from './css.js';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class CounterUsingMobx extends React.Component {

    @observable count;

    constructor() {
        this.count = 0;
    }
    onIncrement = () => {}
    onDecrement = () => {}
    onChangeCount = () => {}
    render() {
        return (<Body>
        <CounterHeading>Counter</CounterHeading>
        <OperationPart>
        <Increment>+</Increment>
        <InputText/>
        <Decrement>-</Decrement>
        </OperationPart>
        </Body>);
    }

}

export default CounterUsingMobx;
