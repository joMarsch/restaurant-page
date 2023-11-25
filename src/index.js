import "./style.css";

const container = document.querySelector(".container");

const menubar = (function () {
    const container = document.createElement("nav");

    const createMenubarItem = (text) => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        li.appendChild(a);

        a.textContent = text;
        a.setAttribute("href", "#")

        return li;
    };

    (function buildMenubar() {
        container.appendChild(document.createElement("ul"))

        const homeAnchor = createMenubarItem("Home");
        const menuAnchor = createMenubarItem("Menu");
        const contactAnchor = createMenubarItem("Contact");

        const anchors = [homeAnchor, menuAnchor, contactAnchor];

        
        anchors.forEach(anchor => container.firstChild.appendChild(anchor));
    })();

    return { container };

})();

const content = (function (){
    container = document.createElement("div");

    return { container };
})();

container.appendChild(menubar.container);
container.appendChild(content.container);