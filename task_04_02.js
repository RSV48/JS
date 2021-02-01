/**
 * 2.Продолжить работу с интернет-магазином:
 * 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
 * 2.2. Реализуйте такие объекты.
 * 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */


function product(productName, price, quantity) {
    this.productName = productName,
        this.price = price,
        this.quantity = quantity,
        this.cost = price * quantity
    this.flg = true

};

const basket = {

    productList: [],
    product,
    addProduct: function (productName, price, quantity) {
        for (const value of this.productList) {
            if (value.productName == productName && value.price == price) {
                value.quantity += quantity;
                value.cost = value.quantity * value.price;
                return
            }
        }
        return this.productList.push(new this.product(productName, price, quantity))
    },
    delProduct: function (productName, quantity) {
        for (const value of this.productList) {
            if (value.productName == productName) {
                if (value.quantity <= quantity | quantity == undefined) {
                    value.flg = false;
                } else {
                    value.quantity -= quantity;
                    value.cost = value.price * value.quantity;
                }
            }
        }

    },
    cost: function () {
        let cost = 0;
        for (const value of this.productList) {
            if (value.flg == true) cost += value.cost;
        }
        return cost;
    }
};
console.clear()
console.log('*******************')
basket.addProduct('Milk', 100, 2);
basket.addProduct('Apple', 55, 5);
basket.addProduct('Milk', 100, 2);
console.log(basket.productList);
console.log(basket.cost());
console.log('*******************')
basket.delProduct('Milk', 2);
console.log(basket.productList);
console.log(basket.cost());