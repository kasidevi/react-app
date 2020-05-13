import React from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { ProductDashBoard, HeaderAndProductSort, ProductListDiv } from './ProductsPageCss';
import ProductList from '../ProductList';
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import Header from '../Header';
import ProductSort from '../ProductSort';
import SizeFilter from '../SizeFilter';

@inject('authStore', 'productStore')
@observer
class ProductsPage extends React.Component {
    componentDidMount() {
        this.doNetWorkCalls();
    }

    @action.bound
    doNetWorkCalls() {
        this.props.productStore.getProductList();
    }

    @action.bound
    onClickSignOut() {}

    renderPage = observer(() => {
        const { totalNoOfProductsDisplayed, onChangeSortBy, onSelectSize } = this.props.productStore;
        console.log("page", this.props.productStore.sortedAndFilteredProducts)
        return (<ProductDashBoard>
        <SizeFilter onSelectSize={onSelectSize}/>
        <ProductListDiv>
        <HeaderAndProductSort>
        <Header productCount={totalNoOfProductsDisplayed} onChangeSortBy={onChangeSortBy}/>
        <ProductSort onChangeSortBy={onChangeSortBy}/>
        </HeaderAndProductSort>
        <ProductList products={this.props.productStore.sortedAndFilteredProducts}/>
       </ProductListDiv>
        </ProductDashBoard>);
    })

    render() {
        const { getProductListAPIStatus, getProductListAPIError, productList } = this.props.productStore;
        return <LoadingWrapperWithFailure
         apiStatus={getProductListAPIStatus}
         apiError={getProductListAPIError}
         onRetryClick={this.doNetWorkCalls}
         productList={productList}
         renderSuccessUI={this.renderPage}
        />;
    }
}
export { ProductsPage };

/*
return (<ProductDashBoard>
        <SizeFilter/>
        <HeaderAndProductSort>
        <Header/>
        <ProductSort/>
        </HeaderAndProductSort>
        <ProductList/>
        <ProductCart/>
        </ProductDashBoard>);
        
        <SizeFilter/>
*/
