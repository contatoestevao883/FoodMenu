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

function selectMeal(selectedMeal) {
    const previousMeal = document.querySelector('.meals .select');
    
    if(previousMeal !== null) {
        previousMeal.classList.remove('selected');   
    }

    pratoSelected.classList.add('selected');
    titleDish = selectedMeal.querySelector('title').innerHTML;
    dishPrice = selectedMeal.querySelector('price').innerHTML;

}

function selectDrink(selectedDrink) {
    const previousDrink = document.querySelector('.drinks .select');
    
    if(previousDrink  !== null) {
        previousDrink .classList.remove('selected');   
    }

    selectedDrink.classList.add('selected');
    titleDrink = selectedDrink .querySelector('title').innerHTML;
    drinkPrice = selectedDrink .querySelector('price').innerHTML;

}

function selectDessert(selectedDessert) {
    const previousDessert = document.querySelector('.desserts .select');
    
    if(previous !== null) {
        previousDessert.classList.remove('selected');   
    }

    pratoSelected.classList.add('selected');
    titleDessert = selectedDessert.querySelector('title').innerHTML;
    dessertPrice = selectedDessert.querySelector('price').innerHTML;

}


