import burgerImage from "./images/burger_stock.jpg";

const home = (function () {
    const container = document.createElement("div");
    container.id = "home";

    (function buildWelcomeLogo() {
        const words = [
            "Welcome",
            "To",
            "Burgerpalace"
        ];

        const welcomeLogo = document.createElement("div");
        welcomeLogo.id = "welcome-logo";

        words.forEach(word => {
            const wordContainer = document.createElement("div");
            wordContainer.innerHTML = word;
            welcomeLogo.appendChild(wordContainer);
        })

        container.appendChild(welcomeLogo);
    })();

    (function buildImage() {
        const image = new Image();
        image.src = burgerImage;
        container.appendChild(image);
    })();

    (function buildText() {
        const paragraph = document.createElement("p");

        paragraph.innerHTML = `This might be the best place to get a burger. But who knows?
        Maybe there are better places but do you really want to find out? 
        I would, because this restaurant does not exist and you might stay hungry if you try
        to get a burger from us`;

        container.appendChild(paragraph);
    })();

    return { container }
})();

export { home }