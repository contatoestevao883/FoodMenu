let titleDish, titleDrink, titleDessert;
let dishPrice, drinkPrice, dessertPrice;
let total = 0;

function makeOrder() {
    
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('hiden');

    const dishTitle = document.querySelector('.meal .name');
    dishTitle.innerHTML = titleDish;
    document.querySelector('.meal .price');

    const drinkTitle = document.querySelector('.drink .name');
    drinkTitle.innerHTML = titleDrink;
    document.querySelector('.drink .price');

    const dessertTitel = document.querySelector('.dessert .name');
    dessertTitel.innerHTML = titleDessert;
    document.querySelector('.dessert .price');

    dishPrice = dishPrice.replace('R$','');
    dishPrice = dishPrice.replace(',', ',');
    dishPrice = Number(dishPrice);

    drinkPrice = drinkPrice.replace('R$','');
    drinkPrice = drinkPrice.replace(',', ',');
    drinkPrice = Number(drinkPrice);

    dessertPrice = dessertPrice.replace('R$','');
    dessertPrice = dessertPrice.replace(',', ',');
    dessertPrice = Number(drinkPrice);

    dessertPrice = Number(dessertPrice.replace('R$','').replace(',',','));

    total = dishPrice + drinkPrice + dessertPrice;
    
    document.querySelector('total-price').innerHTML = total.toFixed(2);
}

function cancelOrder() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hiden');
}