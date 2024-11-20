function transitionState(nextStateFunction) {
    // Add panels to pop-out
    const leftpanel = document.getElementById("leftpanel");
    const rightpanel = document.getElementById("rightpanel");
    leftpanel.classList.add("pop-out");
    rightpanel.classList.add("pop-out");

    // Wait for right panel animation to finish, then add new
    rightpanel.addEventListener("animationend", function() {
        rightpanel.classList.remove("pop-out");
        leftpanel.classList.remove("pop-out");
        rightpanel.innerHTML = "";
        leftpanel.innerHTML = "";

        nextStateFunction();
    })
}

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

    // Add to HTML
    leftPanel.classList.add("pop-in");
    rightPanel.classList.add("pop-in");
    leftPanel.appendChild(image);
    rightPanel.appendChild(aboutText);
}

function portfolio() {
    
}

function resume() {
    const leftPanel = document.getElementById("leftpanel");
    const resume = document.createElement("embed");
    resume.src = 'assets/placeholderPDF.pdf';
    resume.style.width = "30vw";
    resume.style.height = "50vh";
    resume.type = "application/pdf";

    const rightPanel = document.getElementById("rightpanel");
    const download = document.createElement("h1");
    download.textContent = "Download PDF";
    download.style.width = "30vw";
    download.style.height = "auto";

    leftPanel.classList.add("pop-in");
    leftPanel.appendChild(resume);
    rightPanel.classList.add("pop-in");
    rightPanel.appendChild(download);
}

function contact() {

}

function socials() {

}