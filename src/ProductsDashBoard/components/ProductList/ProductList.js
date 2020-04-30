import React from 'react';
import { observer, inject } from 'mobx-react';
import { ProductsMainDiv } from './ProductListCss';
import Product from '../Product';

@observer
class ProductList extends React.Component {

    render() {
        console.log(this.props.products);
        return (<ProductsMainDiv>
    {this.props.products.map((product)=><Product key={Math.random()} productItem={product}/>)}
    </ProductsMainDiv>);
    }
}

export { ProductList };
