/**
 * 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
 * Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
 * 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
 * 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */

function product(productName, price, quantity) {
    this.productName = productName,
        this.price = price,
        this.quantity = quantity,
        this.cost = price * quantity
    this.flg = true

};

const basket = {
    divElement: null,
    productList: [],
    product,
    count_products: 0,
    basket_cost: 0,
    addProduct: function (productName, price, quantity) {
        for (const value of this.productList) {
            if (value.productName == productName && value.price == price) {
                value.quantity += quantity;
                value.cost = value.quantity * value.price;
                return
            }
        }
        this.productList.push(new this.product(productName, price, quantity))
        this.cost()
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
    cost() {
        for (const value of this.productList) {
            if (value.flg == true) {
                this.basket_cost += value.cost;
                this.count_products += value.quantity
            }
        }
    },
    init() {
        this.divElement = document.getElementById('basket'),
            this.divElement.innerHTML = ''
        const paragraf = document.createElement('p')
        this.divElement.appendChild(paragraf)
        if (this.count_products != 0) {
            paragraf.innerText = 'В корзине: ' + this.count_products + ' товаров на сумму ' + this.basket_cost + ' руб.'
        } else paragraf.innerText = 'Корзина пуста'


    }
};
basket.addProduct('Milk', 100, 2);
basket.addProduct('Apple', 55, 5);
basket.addProduct('Milk', 100, 2);
basket.init()

