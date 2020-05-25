import React from 'react';
import { observer } from 'mobx-react';
import { WrappedDiv, LeftArrowButton, PageNumber, RightArrowButton } from './Stylings';

@observer
class Paginator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<WrappedDiv>
        <LeftArrowButton> </LeftArrowButton>
        <PageNumber>pagenmber</PageNumber>
        <RightArrowButton></RightArrowButton>
        </WrappedDiv>);
    }
}

export default { Paginator };
