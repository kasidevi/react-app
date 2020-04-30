import ProductService from '../services/ProductService/ProductAPI';
import ProductStore from './ProductStore';

const productStore = new ProductStore(new ProductService);

export default {
    productStore
};
