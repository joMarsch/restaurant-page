import "./style.css";

import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

// Container of the complete website
const container = document.querySelector(".container");

// Module for the menubar, returns the container
const menubar = (function () {
    const container = document.createElement("div");
    container.classList.add("header");

    const createMenubarItem = (text, content) => {
        var li = document.createElement("li");
        var a = document.createElement("a");
        li.appendChild(a);

        a.textContent = text;
        a.setAttribute("href", "#")
        a.addEventListener("click", () => {
            const contentContainer = document.querySelector(".content");
            contentContainer.replaceChildren();
            contentContainer.appendChild(content.container);
        });

        return li;
    };

    // Instant function to build the title
    (function buildTitle() {
        var title = document.createElement("h1");
        title.innerHTML = "Burgerpalace";
        container.appendChild(title);
    })();

    // Instant function to build the menubar 
    (function buildMenubar() {
        const navigationBar = document.createElement("nav")
        navigationBar.id = "navigation-bar";
        navigationBar.appendChild(document.createElement("ul"))
        container.appendChild(navigationBar);

        const anchors = [
            createMenubarItem("Home", home),
            createMenubarItem("Menu", menu),
            createMenubarItem("Contact", contact)
        ];

        anchors.forEach(anchor => navigationBar.firstChild.appendChild(anchor));
    })();

    return { container };

})();


// Module for the content container, return the container
const content = (function () {
    const container = document.createElement("div");
    container.classList.add("content")

    return { container };
})();

container.appendChild(menubar.container);
container.appendChild(content.container);
document.querySelector(".content").appendChild(home.container)