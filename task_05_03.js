/**
 * 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
 * Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
 * 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
 * 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */



const cartItem = {
    render(cart) {
        return `<div class="cart" id=${cart.id_product}>
                    <div><b>Наименование</b>: ${cart.productName}</div>
                    <div><b>Цена за шт.</b>: ${cart.price}</div>
                    <div><b>В наличии</b>: ${cart.quantity}</div>
                    <button class = "buyButton" id=${cart.id_product}>Купить</button>
                </div>`

    }
}

const basket = {
    divElement: null,
    productList: [],
    count_products: 0,
    basket_cost: 0,

    product(prod) {
        this.productName = prod.productName,
            this.price = prod.price,
            this.quantity = prod.quantity,
            this.cost = prod.price * prod.quantity

    },

    addProduct(prod) {
        console.log(prod)
        for (const value of this.productList) {
            if (value.productName == this.product(prod).productName && value.price == this.product(prod).price) {
                value.quantity++;
                value.cost = value.quantity * value.price;
                return
            }
        }
        this.productList.push(this.product(prod))
        console.log(this.product(prod))
        // this.cost()
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
    // cost() {
    //     for (const value of this.productList) {
    //         this.basket_cost += value.cost;
    //         this.count_products += value.quantity
    //     }
    // },
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

const catalog = {
    cartItem,
    basket,
    cartListBlock: null,
    buyButton: null,
    products: [
        {
            id_product: 1,
            productName: 'Телевизор',
            price: 1000,
            quantity: 10
        },
        {
            id_product: 2,
            productName: 'Кресло',
            price: 500,
            quantity: 5
        },
        {
            id_product: 3,
            productName: 'Ноутбук',
            price: 1500,
            quantity: 3
        }

    ],
    init() {
        this.cartListBlock = document.querySelector('.catalog');
        this.cartListBlock.innerText = 'Каталог товаров:'
        this.render()
        document.querySelectorAll('.buyButton').forEach(button => {
            button.addEventListener('click', (event) => { this.containerClickHandler(event) });
        });

    },
    render() {
        this.products.forEach(block => {
            this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(block));
            console.log(block.p)
        })
    },
    containerClickHandler() {
        (this.products.forEach(prod => {
            if (prod.id_product == event.target.id) {
                prod.quantity = 1
                this.basket.addProduct(prod)
            }
        }))
    }
};


catalog.init()



// basket.addProduct('Milk', 100, 2);
// basket.addProduct('Apple', 55, 5);
// basket.addProduct('Milk', 100, 2);
// basket.init()
