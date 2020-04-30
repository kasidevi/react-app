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
        switch (sortBy) {
            case 'SELECT':
                this.productList = this.productList;
                break;
            case 'ASCENDING':
                this.productList = this.productList.slice().sort((a, b) => a.price > b.price);
                break;

            case 'DECENDING':
                this.productList = this.productList.slice().sort((a, b) => a.price < b.price);
        }
        //   console.log('switch', this.productList);
    }

    @action.bound
    onSelectSize(size) {
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
        return this.productList.length;
    }

    @computed
    get products() {}

    @computed
    get sortedAndFilteredProducts() {

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
