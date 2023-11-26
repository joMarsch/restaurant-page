const contact = (function () {
    const container = document.createElement("div");
    container.id = "contact";

    (function buildTitle() {
        var title = document.createElement("h2");
        title.innerHTML = "Contact";
        container.appendChild(title);
    })();

    return { container }
})();

export { contact }