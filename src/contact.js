import Phone from "./images/phone-classic.svg"
import Email from "./images/email.svg"

class ContactInformation {
    constructor(phoneNumber, email, hours, adress) {
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._hours = hours;
        this._adress = adress;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get email() {
        return this._email;
    }

    get hours() {
        return this._hours;
    }

    get adress() {
        return this._adress;
    }
}

const contact = (function () {
    const container = document.createElement("div");
    container.id = "contact";

    const contactInformation = new ContactInformation(
        "(030) 123456789",
        "contact@burgerpalace.de",
        [
            "Monday: 11:00 - 20:00",
            "Tuesday: 11:00 - 20:00",
            "Wednesday: 11:00 - 20:00",
            "Thursday: 11:00 - 20:00",
            "Friday: 11:00 - 20:00",
            "Saturday: 11:00 - 22:00",
            "Sunday: closed"
        ],
        [
            "Burgerpalace",
            "Falsche Straße 13",
            "10113 Berlin"
        ]
    );

    (function buildTitle() {
        var title = document.createElement("h2");
        title.innerHTML = "Contact";
        container.appendChild(title);
    })();

    (function buildContactContainer() {
        var contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container");
        var information = [
            [Email, contactInformation.email], 
            [Phone, contactInformation.phoneNumber]
        ];
        information.forEach(element => {
            const image = new Image();
            image.src = element[0];
            contactContainer.appendChild(document.createElement("div")).appendChild(image);

            const div = document.createElement("div");
            div.innerHTML = element[1];
            contactContainer.appendChild(div);
        })

        container.appendChild(contactContainer);
    })();

    (function buildAdressTitle() {
        var title = document.createElement("h3");
        title.innerHTML = "Adress";
        container.appendChild(title);
    })();

    (function buildAdressContainer() {
        var div = document.createElement("div");
        div.innerHTML = contactInformation.adress.join("<br>")
        container.appendChild(div);
    })();

    (function buildHoursTitle() {
        var title = document.createElement("h3");
        title.innerHTML = "Hours";
        container.appendChild(title);
    })();

    (function buildHoursContainer() {
        var div = document.createElement("div");
        div.innerHTML = contactInformation.hours.join("<br>")
        container.appendChild(div);
    })();



    return { container }
})();

export { contact }