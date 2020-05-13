import { observable, action, computed } from 'mobx';
import { API_INITIAL, API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import ProductModel from '../models/ProductModel';

class ProductStore {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable sizeFilter
    @observable sortBy
    productsAPIService

    constructor(productService) {
        this.productsAPIService = productService;
        this.init();
    }

    @action.bound
    getProductList() {
        const getProductList = this.productsAPIService.getProductsAPI();
        return bindPromiseWithOnSuccess(getProductList)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError);
    }

    @action.bound
    setGetProductListAPIStatus(apiStatus) {
        this.getProductListAPIStatus = apiStatus;
    }

    @action.bound
    setProductListResponse(apiResponse) {
        apiResponse.map((eachProduct) => {
            const productModel = new ProductModel(eachProduct);
            this.productList.push(productModel);
        });
    }

    @action.bound
    setGetProductListAPIError(error) {
        this.getProductListAPIError = error;
    }

    @action.bound
    onChangeSortBy(sortBy) {
        this.sortBy = sortBy;
        console.log("onChangeSortBy", this.sortBy)
    }

    @action.bound
    onSelectSize(size) {
        console.log(this.sizeFilter);

        if (this.sizeFilter.indexOf(size) === -1) {
            this.sizeFilter.push(size);
        }
        else {
            let index = this.sizeFilter.indexOf(size);
            this.sizeFilter.splice(index, 1);

        }
    }

    @computed
    get totalNoOfProductsDisplayed() {
        return this.sortedAndFilteredProducts.length;
    }

    @computed
    get products() {
        console.log("products", this.sortBy)
        switch (this.sortBy) {
            case 'SELECT':
                return this.productList;
                //break;
            case 'ASCENDING':
                let a = this.productList.slice().sort((a, b) => a.price > b.price);
                console.log("inStore", this.productList)
                return a;

            case 'DECENDING':
                let b = this.productList.slice().sort((a, b) => a.price < b.price);
                return b;
        }
    }

    @computed
    get sortedAndFilteredProducts() {

        if (this.sizeFilter.length === 0) {
            return this.products;
        }
        else {
            let updatedList = [];
            for (let i = 0; i < this.products.length; i++) {
                for (let j = 0; j < this.sizeFilter.length; j++) {
                    for (let k = 0; k < this.products[i].availableSizes.length; k++) {
                        if (this.products[i].availableSizes[k] === this.sizeFilter[j]) {
                            if (updatedList.indexOf(this.products[i]) === -1) {
                                updatedList.push(this.products[i]);
                                break;
                            }
                        }
                    }
                }
            }
            return updatedList;
        }

    }

    @action
    init() {
        this.productList = [];
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.sizeFilter = [];
        this.sortBy = 'SELECT';
    }
}

export { ProductStore };
