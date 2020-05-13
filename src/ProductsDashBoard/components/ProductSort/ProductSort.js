import React from 'react';
import { observer } from 'mobx-react';

import { ProductSortDiv, Select, Option } from './ProductSortCss';

@observer
class ProductSort extends React.Component {
    onSelectSortBy = (event) => {
        return this.props.onChangeSortBy(event.target.value);
    }

    render() {
        return (<ProductSortDiv>
        <Select onChange={this.onSelectSortBy}>
        <Option value='SELECT'>Select</Option>
        <Option value='ASCENDING'>Lowest to highest</Option>
        <Option value='DECENDING'>Highest to lowest</Option>
        </Select>
        </ProductSortDiv>);
    }
}

export { ProductSort };
