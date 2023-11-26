class Item {
    constructor(name, price, ingredients) {
        this._name = name;
        this._price = price;
        this._ingredients = ingredients;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get ingredients() {
        return this._ingredients.join(", ");
    }

};

const menuItems = (function () {
    const basicIngredients = [
        "Burger Bun",
        "Tomatoes",
        "Salat",
        "Pickles"
    ];

    const list = [
        new Item("Hamburger", "6,99", ["Beef Patty"].concat(basicIngredients)),
        new Item("Cheeseburger", "7,99", ["Beef Patty", "Cheddar"].concat(basicIngredients)),
        new Item("Chicken Burger", "7,99", ["Chicken Breast", "Gouda"].concat(basicIngredients)),
    ];

    return { list }
})();

const menu = (function () {
    const container = document.createElement("div");
    container.id = "menu";

    (function buildTitle() {
        var title = document.createElement("h2");
        title.innerHTML = "Menu";
        container.appendChild(title);
    })();

    (function buildItemContainer() {
        var itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        menuItems.list.forEach(item => {
            const menuItem = document.createElement("div");
            [item.name, item.price, item.ingredients].forEach(property => {
                const div = document.createElement("div");
                div.innerHTML = property;
                menuItem.appendChild(div);
            })
            itemContainer.appendChild(menuItem);
        });

        container.appendChild(itemContainer);
    })();


    return { container }
})();

export { menu }