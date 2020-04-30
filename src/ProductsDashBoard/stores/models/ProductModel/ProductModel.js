import { observable } from 'mobx';

class ProductModel {
    @observable productId
    @observable availableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL
    constructor(object) {
        this.productId = object.id;
        this.availableSizes = object.availableSizes;
        this.currencyFormat = object.currencyFormat;
        this.currencyId = object.currencyId;
        this.description = object.description;
        this.installmentsCount = object.installments;
        this.isFreeShipping = object.isFreeShipping;
        this.price = object.price;
        this.printStyle = object.style;
        this.title = object.title;
        this.imageURL = object.image;
    }
}

export { ProductModel };
