/*
Written by Carl Barcenas
This file is meant to contain the functions used to transition between
the navbar items (with the exception of 'Portfolio', this will be in portfolio.js)
*/

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

function home() {
    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "Welcome back! I'm still Carl :)";

    const body = document.getElementById("body-container");
    body.appendChild(homeHeader);
}

function aboutMe() {
    // Create and style elements
    const image = document.createElement("img");
    image.src = 'images/grad_photo.jpg';
    image.classList.add("selfImage");

    // Header Titles
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("headerContainer");
    const header1 = document.createElement("h1");
    header1.textContent = "MARQUETTE UNIVERSITY ALUMNI";
    header1.classList.add("header1");
    const header2 = document.createElement("h1");
    header2.textContent = "<Software Engineer>";
    header2.classList.add("header2");
    const header3 = document.createElement("h1");
    header3.textContent = "IT Professional";
    header3.classList.add("header3");
    headerContainer.appendChild(header1);
    headerContainer.appendChild(header2);
    headerContainer.appendChild(header3);

    // Body Text
    const bodyText = document.createElement("div");
    bodyText.classList.add("bodyText");
    const line1 = document.createElement("p");
    line1.textContent = "Hi, I’m Carl Barcenas!";
    const line2 = document.createElement("p");
    line2.textContent = "I’m an IT professional with a passion for problem-solving and technology.";
    const line3 = document.createElement("p");
    line3.textContent = "With hands-on experience managing systems and troubleshooting issues, I’m now expanding my skill set to become a software engineer.";
    const line4 = document.createElement("p");
    line4.textContent = `I enjoy tackling complex challenges, learning new programming languages, and building solutions that make a difference.`;
    const line5 = document.createElement("p");
    line5.textContent = "Let's connect and build something great together!";
    bodyText.append(line1);
    bodyText.append(line2);
    bodyText.append(line3);
    bodyText.append(line4);
    bodyText.append(line5);

    // Get body selector and style
    const body = document.getElementById("body-container");

    // Append Elements to body-container
    body.style.display = "flex";
    body.style.flexDirection = "row";
    body.classList.add("pop-in");
    body.appendChild(headerContainer);
    body.appendChild(image);
    body.appendChild(bodyText);
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
    socialHeader.classList.add("contactHeader");
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
    contactHeader.classList.add("contactHeader");
    contactHeader.innerText = "CONTACTS";
    
    const phoneNumber = document.createElement("h2");
    phoneNumber.innerHTML = "+1 (630) 812-8124";

    const emailLink = document.createElement("a");
    emailLink.href = "mailto:carlanthonybarcenas@gmail.com";
    const email = document.createElement("h2");
    email.classList.add("email");
    email.innerHTML = "carlanthonybarcenas@gmail.com";
    emailLink.appendChild(email);

    // Append to body
    const body = document.getElementById("body-container");
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.appendChild(socialHeader);
    body.appendChild(logoLinks);
    body.appendChild(contactHeader);
    body.appendChild(phoneNumber);
    body.appendChild(emailLink);
}