/*
A Function used to create a singular card for a singular project.
Styling found in styles.css
Parameters: cardTitle - String / cardDesc - String / imgSrc - String /
Returns cardContainer div to add into portfolioContainer in portfolio()
*/
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

    return cardContainer
}


/* 
The same function as above, however the elements are classified under
the "largeCard" variant of their classes
*/;
function createLargeCard(cardTitle, cardDesc, imgSrc) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("largeCardContainer");

    const cardTextContainer = document.createElement("div");
    const title = document.createElement("h1");
    title.innerHTML = cardTitle;
    title.classList.add("largeCardTitle");
    const description = document.createElement("p");
    description.innerHTML = cardDesc;
    description.classList.add("largeCardDesc");
    cardTextContainer.appendChild(title);
    cardTextContainer.appendChild(description);

    const image = document.createElement("img");
    image.classList.add("largeCardImg");
    image.src = imgSrc;

    cardContainer.appendChild(cardTextContainer);
    cardContainer.appendChild(image);

    return cardContainer;
}

/*
void function to create the portfolio page.
*/
function portfolio() {
    // Setting up portfolio container
    const portfolioContainer = document.createElement("div");
    portfolioContainer.classList.add("portfolioContainer");

    // Creating cards
    card1 = createCard("Personal Website", "You're looking at it!", "images/personal_logo_white.png");
    portfolioContainer.appendChild(card1);

    // Append to body-container
    const body = document.getElementById("body-container");
    body.appendChild(portfolioContainer);
}