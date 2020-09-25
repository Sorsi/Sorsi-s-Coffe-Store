function addDragAndDropHandlers() {
    let coffeeImages = document.getElementsByClassName('prod-article-wide');
    let shoppingCartDropZone = document.getElementById('shopping-cart');
    let shoppingCart = document.querySelectorAll('#shopping-cart ul')[0];

    for (let i = 0; i < coffeeImages.length; i++) {
        console.log('length of the images', coffeeImages.length);
        coffeeImages[i].addEventListener('dragstart', function(ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData('Text', this.getAttribute('id'));
        }, false);
    }

    shoppingCartDropZone.addEventListener('dragover', function(ev) {
        console.log('dragover');
        if (ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = 'copy';
        return false;
    }, false);

    shoppingCartDropZone.addEventListener('drop', function(ev) {
        console.log('drdrop');

        if (ev.stopPropagation)
            ev.stopPropagation();

        let coffeeId = ev.dataTransfer.getData('Text');
        let element = document.getElementById(coffeeId);

        addCoffeeToShoppingCart(element, coffeeId);
        ev.stopPropagation();

        return false;
    }, false);

    function addCoffeeToShoppingCart(item, id) {
        let html = id + '' + item.getAttribute('data-price');

        let liElement = document.createElement('li');
        liElement.innerHTML = html;
        shoppingCart.appendChild(liElement);
    }
}