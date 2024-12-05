function createCard(cardTitle, cardDesc, imgSrc) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");

    const cardTextContainer = document.createElement("div");
    const title = document.createElement("h1");
    title.innerHTML = cardTitle;
    title.classList.add("cardTitle");
    const description = document.createElement("p");
    description.innerHTML = cardDesc;
    description.classList.add("cardDesc");
    cardTextContainer.appendChild(title);
    cardTextContainer.appendChild(description);

    const image = document.createElement("img");
    image.classList.add("cardImg");
    image.src = imgSrc;

    cardContainer.appendChild(cardTextContainer);
    cardContainer.appendChild(image);

    document.getElementById("body-container").appendChild(cardContainer);
}

function portfolio() {
    createCard("Personal Website", "You're looking at it!", "images/Logo-black.png");
}