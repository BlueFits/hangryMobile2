export default class Item {
    constructor(id, name, shortDescription, description, price, isSpecial) {
        this._id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.price = price;
        this.isSpecial = isSpecial;
    }
}