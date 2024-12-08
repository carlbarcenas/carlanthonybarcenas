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
    card1 = createCard("Personal Website", `You're looking at it! More of a DOM practice page that I just continued to update
        for fun, but ended up enjoying it enough to polish it to the end.`, "images/personal_logo_white.png");  // Personal Site
    portfolioContainer.appendChild(card1);

    // Etch A Sketch
    // Polish this one before adding

    // Air Distance Calculator

    // Remaining Useful Life of Industrial Machine MLM
    card2 = createCard("MLM For Industrial Machines", `A machine learning model to predict the Remaining Useful Life 
        of an Industrial Machine based on sensor data.`, "images/IndustrialArm.png");
    portfolioContainer.appendChild(card2);

    // Embedded Scoreboard
    card3 = createCard("Scoreboard Tablet", `A live score tracker for sports games of choice using the LandTiger 2.0 
        Baseboard.`, 'images/quickscore.png');
        portfolioContainer.appendChild(card3);

    // Merge Sort in RISC-V Assembly
    card4 = createCard("Merge Sort in Assembly", `Programming like our forefathers. Recreated merge sort algorithm in
        RISC-V Assembly language`, 'images/RISCV.png');
    portfolioContainer.appendChild(card4);
    // MU Xinu OS
    card5 = createCard("Xinu OS", `Recreation of 'Xinu Is Not Unix' OS for the purpose of learning process management, memory management, file system management, pain,
        and more courtesy of Marquette University.`, 'images/xinuos.jpg');
    portfolioContainer.appendChild(card5);

    // Javascript Tetris

    // Plant Environment Probe

    // MUBB Report Synthesizer

    // Append to body-container
    const body = document.getElementById("body-container");
    body.appendChild(portfolioContainer);
}