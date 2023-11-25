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

    return { container }
})();

export { home }