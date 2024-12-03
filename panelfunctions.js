// Helper function to transition between panel functions.
// Parameters: nextStateFunction = name of the function being transitioned to.
function transitionState(nextStateFunction) {
    // Add panels to pop-out
    const body = document.getElementById("body-container");
    body.classList.add("pop-out");

    // Wait for right panel animation to finish, then add new
    body.addEventListener("animationend", function () {
        body.classList.remove("pop-out");
        body.innerHTML = "";
        
        // Memory Cleanup
        var nodes = body.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            body.removeChild(nodes[i]);
        }

        nextStateFunction();
    })
}

function aboutMe() {
    // Create and style elements
    const image = document.createElement("img");
    image.src = 'images/grad_photo.jpg';
    image.classList.add("selfImage");
    const aboutText = document.createElement("h1");             // Create and style about me text
    aboutText.classList.add("aboutMeText");
    aboutText.textContent = "Marquette University Alumni. Software Engineer. IT Professional.";
    // TODO: Consolas for Software Engineer, purple
    // TODO: VT323 for IT Professional
    // Maybe do a panel setup

    const bodyText = document.createElement("p");
    bodyText.classList.add("bodyText");
    bodyText.textContent = "Hi, my name is Carl Barcenas. I'm a graduate of Marquette University with a B.S. in Computer Engineering."

    // Get body selector and style
    const body = document.getElementById("body-container");

    // Append Elements to body-container
    body.classList.add("pop-in");
    body.appendChild(image);
    body.appendChild(aboutText);
    body.appendChild(bodyText);
}

function portfolio() {

}

function resume() {
    // Create elements
    const resume = document.createElement("embed");
    resume.classList.add("resumeEmbed");
    resume.src = 'assets/placeholderPDF.pdf';
    resume.type = "application/pdf";
    const download = document.createElement("button");
    download.classList.add("downloadBtn");
    download.textContent = "Download PDF";

    const body = document.getElementById("body-container");
    body.classList.add("pop-in");
    body.append(resume);
    body.append(download);
}

function contact() {
    // Create Logos
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

    const logoLinks = document.createElement("div");
    logoLinks.classList.add("logoLinks");
    logoLinks.appendChild(linkedInLink);
    logoLinks.appendChild(githubLink);

    // Create Contacts
    const contactHeader = document.createElement("h1");
    contactHeader.innerText = "CONTACTS";
    contactHeader.style.paddingTop = "15px";
    const phoneNumber = document.createElement("h2");
    phoneNumber.innerHTML = "+1 (630) 812-8124";
    const email = document.createElement("h2");
    email.innerHTML = "carlanthonybarcenas@gmail.com";

    const body = document.getElementById("body-container");
    body.appendChild(socialHeader);
    body.appendChild(logoLinks);
    body.appendChild(contactHeader);
    body.appendChild(phoneNumber);
    body.appendChild(email);
}