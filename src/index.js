import "./style.css";

import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

// Container of the complete website
const container = document.querySelector(".container");

// Module for the menubar, returns the container
const menubar = (function () {
    const container = document.createElement("nav");

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

    // Function to build the menubar which is instantly executed
    (function buildMenubar() {
        container.appendChild(document.createElement("ul"))

        const anchors = [
            createMenubarItem("Home", home),
            createMenubarItem("Menu", menu),
            createMenubarItem("Contact", contact)
        ];

        anchors.forEach(anchor => container.firstChild.appendChild(anchor));
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