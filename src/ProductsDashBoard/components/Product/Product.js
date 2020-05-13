import React from 'react';
import { observer } from 'mobx-react';
import { EachProduct, Image, Title, LineBar, Rate, CurrencyFormat, Price, InstallmentsCount, AddCartButton } from './ProductCss';

@observer
class Product extends React.Component {
    render() {
        const { productItem } = this.props;
        const installmentCost = (productItem.price / productItem.installmentsCount).toFixed(2);
        return (<EachProduct>
        <Image src={productItem.imageURL}/>
        <Title>{productItem.title}</Title>
        <LineBar></LineBar>
        <Rate>
        <CurrencyFormat>{productItem.currencyFormat}</CurrencyFormat>
        <Price>{productItem.price}</Price>
        </Rate>
        <InstallmentsCount>or {productItem.installmentsCount} x {productItem.currencyFormat} {installmentCost}</InstallmentsCount>
        <AddCartButton>Add to cart</AddCartButton>
        </EachProduct>);
    }
}


export { Product };
