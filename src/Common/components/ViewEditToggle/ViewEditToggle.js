import React from 'react';
import withToggle from '../../hocs/withToggle';
import { MainDiv, ViewEditToggleHeading, InputTag, Button } from './Styling';

class ViewEditToggle extends React.Component {

    render() {
        return (<MainDiv>
        <ViewEditToggleHeading>ViewEditToggle</ViewEditToggleHeading>
        <InputTag type="text"/>
        <Button onClick={withToggle}>edit</Button>
        </MainDiv>);
    }

}

export default ViewEditToggle;
