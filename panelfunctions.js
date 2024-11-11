function aboutme() {
    // Create left panel of image
    const leftPanel = document.querySelector(".leftpanel");
    const image = document.createElement("img");
    image.src = 'images/grad_photo.jpg';
    image.setAttribute("class", "selfImage");

    leftPanel.appendChild(image);

    // Create right panel of self description
    const rightPanel = document.querySelector(".rightpanel");   // Get Right Panel
    const aboutText = document.createElement("h1");             // Create and style about me text
    aboutText.setAttribute("class", "aboutMeText");
    aboutText.textContent = "Marquette University Alumni. Software Engineer. IT Professional."

    rightPanel.appendChild(aboutText);


    console.log("aboutme printing");
}