import React from 'react';
import { observer } from 'mobx-react';
import { HeaderDiv } from './HeaderCss.js';

@observer
class Header extends React.Component {
    render() {
        const { productCount } = this.props;
        return (<HeaderDiv>
        {productCount} Product(s) found
        </HeaderDiv>);
    }
}

export { Header };
