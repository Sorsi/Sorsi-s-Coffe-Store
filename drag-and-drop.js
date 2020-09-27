function addDragAndDropHandlers() {
    let coffeeImages = document.getElementsByClassName('prod-article-wide');
    let shoppingCartDropZone = document.getElementById('shopping-cart');
    let shoppingCart = document.querySelectorAll('#shopping-cart ul')[0];

    let Cart = (function () {
        this.coffees = [];
    });

    let Coffee = (function (id, price) {
        this.coffeeId = id;
        this.price = price;
    });

    let currentCart = null;

    currentCart = JSON.parse(localStorage.getItem('cart'));
    if (!currentCart) {
        createEmptyCart();
    }

    updateShoppingCartUI();

    currentCart.addCoffee = function(coffee) {
        currentCart.coffees.push(coffee);
        localStorage.setItem('cart', JSON.stringify(currentCart));
    };

    for (let i = 0; i < coffeeImages.length; i++) {
        coffeeImages[i].addEventListener('dragstart', function(ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData('Text', this.getAttribute('id'));
        }, false);
    }

    shoppingCartDropZone.addEventListener('dragover', function(ev) {
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = 'copy';
        return false;
    }, false);

    shoppingCartDropZone.addEventListener('drop', function(ev) {
        if (ev.stopPropagation)
            ev.stopPropagation();

        let coffeeId = ev.dataTransfer.getData('Text');
        let element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);
        ev.stopPropagation();

        return false;
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        let price = item.getAttribute('data-price');
        let coffee = new Coffee(id, price);

        currentCart.addCoffee(coffee);
        updateShoppingCartUI();
    }

    function createEmptyCart() {
        localStorage.clear();
        localStorage.setItem('cart', JSON.stringify(new Cart()));
        currentCart = JSON.parse(localStorage.getItem('cart'));
    }

    function updateShoppingCartUI() {
        shoppingCart.innerHTML = '';
        for (let i = 0; i < currentCart.coffees.length; i++) {
            let liElement = document.createElement('li');
            liElement.innerHTML = currentCart.coffees[i].coffeeId + ' ' + currentCart.coffees[i].price;
            shoppingCart.appendChild(liElement);
        }
    }
}