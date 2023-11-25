const menu = (function () {
    const container = document.createElement("div");
    container.id = "menu";
    container.innerHTML = "Menu";

    return { container }
})();

export { menu }