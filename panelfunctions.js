// Helper function to transition between panel functions.
// Parameters: nextStateFunction = name of the function being transitioned to.
function transitionState(nextStateFunction) {
    // Add panels to pop-out
    const leftpanel = document.getElementById("leftpanel");
    const rightpanel = document.getElementById("rightpanel");
    leftpanel.classList.add("pop-out");
    rightpanel.classList.add("pop-out");

    // Wait for right panel animation to finish, then add new
    rightpanel.addEventListener("animationend", function () {
        rightpanel.classList.remove("pop-out");
        leftpanel.classList.remove("pop-out");
        rightpanel.innerHTML = "";
        leftpanel.innerHTML = "";
        
        // Memory Cleanup
        var nodes = rightpanel.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            rightpanel.removeChild(nodes[i]);
        }
        var nodes = leftpanel.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            leftpanel.removeChild(nodes[i]);
        }

        nextStateFunction();
    })
}

function aboutMe() {
    // Create left panel of image
    const leftPanel = document.getElementById("leftpanel");
    const image = document.createElement("img");
    image.src = 'images/grad_photo.jpg';
    image.classList.add("selfImage");
    image.style.width = "100%";
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
    const download = document.createElement("h2");
    download.textContent = "Download PDF";
    download.style.width = "30vw";
    download.style.height = "auto";

    leftPanel.classList.add("pop-in");
    leftPanel.appendChild(resume);
    rightPanel.classList.add("pop-in");
    rightPanel.appendChild(download);
}

function contact() {
    const leftPanel = document.getElementById("leftpanel");
    const socialHeader = document.createElement("h1");
    socialHeader.textContent = "SOCIALS";
    const linkedInLink = document.createElement("a");
    linkedInLink.href = "http://www.linkedin.com/in/carlbarcenas/";
    linkedInLink.target = "_blank";
    const linkedInLogo = document.createElement("img");
    linkedInLogo.src = "/images/linkedInLogo.png";
    linkedInLogo.classList.add("logo");
    linkedInLink.appendChild(linkedInLogo);
    const githubLink = document.createElement("a");
    githubLink.href = "http://www.github.com/carlbarcenas/";
    githubLink.target = "_blank";
    const githubLogo = document.createElement("img");
    githubLogo.src = "/images/githubLogo.png";
    githubLogo.classList.add("logo");
    githubLink.appendChild(githubLogo);

    const rightPanel = document.getElementById("rightpanel");
    const contactHeader = document.createElement("h1");
    contactHeader.innerText = "CONTACTS";
    contactHeader.style.paddingTop = "15px";
    const phoneNumber = document.createElement("h2");
    phoneNumber.innerHTML = "+1(630)812-8124";
    const email = document.createElement("h2");
    email.innerHTML = "carlanthonybarcenas@gmail.com";

    rightPanel.append(socialHeader);
    rightPanel.append(linkedInLink);
    rightPanel.append(githubLink);

    rightPanel.append(contactHeader);
    rightPanel.append(phoneNumber);
    rightPanel.append(email);
    var nodes = rightPanel.childNodes;          // Edit Margin of right panel nodes
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.margin = 0;
    }
}