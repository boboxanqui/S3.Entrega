// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]



// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++){
        if (products[i].id === id){
            cartList.push(products[i])
            break;
        }
    }
}

// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length);
    printCart();
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    let subtotalPrice = {
        grocery: 0,
        beauty: 0,
        clothes: 0
    }
    
    cart.forEach(item => {
        switch (item.type){
            case 'grocery':  subtotalPrice.grocery += item.price; break;
            case 'beauty': subtotalPrice.beauty += item.price; break;
            case 'clothes': subtotalPrice.clothes += item.price; break;
        }
    })

    return subtotalPrice;
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price*item.quantity;
    })

    return totalPrice;
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cartList.forEach(item => {
        cart.forEach(item2 => {
            if (item.id === item2.id){
                item2.quantity++
            } else {
                item.quantity = 1;
                cart.push(item)
            }
        })
    })
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let subtotalWithDiscount  = 0;

    cart.forEach(item => {
        if(item.id === 1) {
            if (item.quantity > 2){
                // item.price = 10;
                subtotalWithDiscount -= (item.quantity*0.5)
            }
        } else if (item.id === 3){
            if (item.quantity > 9) {
                subtotalWithDiscount -= (item.price/3)*item.quantity;
            }
        }
    })
    return subtotalWithDiscount;
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    
    let added = false;

    for (i = 0; i < products.length; i++){
        if (products[i].id === id){
            cart.forEach(item => {
                if(id === item.id){
                    item.quantity++
                    added = true;
                } 
            })
            if(!added){
                products[i].quantity = 1;
                cart.push(products[i])    
            }
        break;     
        } 
    }
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    cart.forEach(item => {
        if(id === item.id){
            if (item.quantity > 1){
                item.quantity--
            } else {
                cart.splice(cart.indexOf(item),1)
            }
        }
    })
    printCart();
}

// Exercise 10

// DOM SELECTION

const resumeList = document.querySelector('.list')
resumeList.classList.add('list-unstyled');

const resumePrice = document.getElementById('selectSomething');

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    if (cart.length > 0){
        headerResumeList();
        itemsResumeList();
        totalPriceResumeList();
    } else {
        resumeList.innerHTML = ''
        resumePrice.innerHTML = `<h3 class="text-center bill px-5">Select Something</h3>`
    }

}

headerResumeList = () => {
    resumeList.innerHTML = `<li class="row text-center mx-2">
        <h5 class="h5 col-5">Item</h5>
        <h5 class="h5 col-3">Quantity</h5>
        <h5 class="h5 col-3">Price</h5>
        <h5 class="h5 col-1"></h6>
        </li>
        <hr class="mt-1 w-100">`
}

itemsResumeList = () => {
    cart.forEach (item => {
       resumeList.innerHTML += `<li class="row text-center mx-1">
        <p class="col-5">${item.name}</p>
        <p class="col-3">${item.quantity}</p>
        <p class="col-3">${item.price*item.quantity}</p>
        <a href="#" class="mx-auto text-danger" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></a>
        </li>` 
    })
    resumeList.innerHTML += `<li class="d-flex justify-content-end"><button type="button" class="btn btn-sm btn-outline-danger ml-auto" onclick="cleanCart()">Remove all</button></li> `
}



totalPriceResumeList = () => {
    let discount = applyPromotionsCart()
    if (discount != 0) {
        resumePrice.innerHTML = `<h5 class="h5 text-center">Discount: ${discount.toFixed(2)}</h5>
            <h4 class="h4 text-center">Total: $${(calculateTotal()+discount).toFixed(2)}</h4> ` 
    } else {
      resumePrice.innerHTML = `<h4 class="h4 text-center">Total: $${(calculateTotal()).toFixed(2)}</h4> `  
    }
    
}
