function clearPanel(panelID) {
    // Animation for panel clearing:
    var panel = document.getElementById(panelID);
    panel.classList.add("pop-out");
    panel.addEventListener("animationend", function() {
        panel.innerHTML = "";
        panel.classList.remove("pop-out");
    })
}

function aboutMe() {
    // Create left panel of image
    const leftPanel = document.querySelector(".leftpanel");
    const image = document.createElement("img");
    image.src = 'images/grad_photo.jpg';
    image.classList.add("selfImage", "pop-in");
    image.style.width = "30vw";
    image.style.height = "auto";
    image.style.borderRadius = "40px";

    leftPanel.appendChild(image);

    // Create right panel of self description
    const rightPanel = document.querySelector(".rightpanel");   // Get Right Panel
    const aboutText = document.createElement("h1");             // Create and style about me text
    aboutText.classList.add("aboutMeText", "pop-in");
    aboutText.setAttribute("class", "aboutMeText");
    aboutText.setAttribute("class", "pop-in");
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