function clearPanel(panelID) {
    document.getElementById(panelID).innerHTML = "";
}

function aboutMe() {
    // Create left panel of image
    const leftPanel = document.querySelector(".leftpanel");
    const image = document.createElement("img");
    image.src = 'images/grad_photo.jpg';
    image.setAttribute("class", "selfImage");
    image.setAttribute("class", "slide-top");
    image.style.width = "30vw";
    image.style.height = "auto";
    image.style.borderRadius = "40px";

    leftPanel.appendChild(image);

    // Create right panel of self description
    const rightPanel = document.querySelector(".rightpanel");   // Get Right Panel
    const aboutText = document.createElement("h1");             // Create and style about me text
    aboutText.setAttribute("class", "aboutMeText");
    aboutText.setAttribute("class", "slide-top");
    aboutText.textContent = "Marquette University Alumni. Software Engineer. IT Professional."
    aboutText.style.width = "30vw";
    aboutText.style.height = "auto";

    rightPanel.appendChild(aboutText);


    console.log("aboutme printing"); // DELETE ME
}

function portfolio() {

}

function resume() {
    
}

function contact() {

}

function socials() {

}