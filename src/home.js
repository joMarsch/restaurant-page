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

        paragraph.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

        container.appendChild(paragraph);
    })();

    return { container }
})();

export { home }