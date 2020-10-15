export default class Restaurant {
    constructor(id, name, address, phone, picture, instagramHandle, website, category) {
        this._id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.picture = picture;
        this.instagramHandle = instagramHandle;
        this.website = website;
        this.category = category;
    }
};