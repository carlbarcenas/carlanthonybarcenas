function clearPanel(panel) {
    // Animation for panel clearing:
    // var panel = document.getElementById(panelID);
    panel.classList.add("pop-out");
    panel.addEventListener("animationend", function() {
        panel.classList.remove("pop-out");
        panel.innerHTML = "";
        console.log("Checkpoint 1, Clear: " + panel.classList);
    })
}
// TODO: Maybe instead of clearpanel, create a transition section function?

function aboutMe() {
    // Create left panel of image
    const leftPanel = document.getElementById("leftpanel");
    const image = document.createElement("img");
    image.src = 'images/grad_photo.jpg';
    image.classList.add("selfImage");
    image.style.width = "30vw";
    image.style.height = "auto";
    image.style.borderRadius = "40px";

    // Create right panel of self description
    const rightPanel = document.getElementById("rightpanel");   // Get Right Panel
    const aboutText = document.createElement("h1");             // Create and style about me text
    aboutText.classList.add("aboutMeText");
    aboutText.textContent = "Marquette University Alumni. Software Engineer. IT Professional."
    aboutText.style.width = "30vw";
    aboutText.style.height = "auto";

    clearPanel(leftPanel);
    clearPanel(rightPanel);
    leftPanel.classList.add("pop-in");
    rightPanel.classList.add("pop-in");
    leftPanel.appendChild(image);
    rightPanel.appendChild(aboutText);
}

function portfolio() {

}

function resume() {
    
}

function contact() {

}

function socials() {

}