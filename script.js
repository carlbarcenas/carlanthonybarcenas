// Create selectors for navbar items
const navbar_items = document.querySelectorAll("li");
var active_nav = document.querySelector("#active");
console.log(active_nav);

navbar_items.forEach((listitem) => {
    listitem.addEventListener("click", () => {
        if(listitem.getAttribute("id") != "active" || active_nav == null) {
            listitem.setAttribute("id", "active");              // Set clicked item as "active" ID
            if(active_nav != null) {                            // Remove "active" ID from old selection
                active_nav.removeAttribute("id");
            }
            active_nav = document.querySelector("#active");     // Update active_nav variable

            // Update Info
            switch (active_nav.className) {
                case 'aboutme':
                    transitionState(aboutMe);
                    break;
                case 'portfolio':
                    transitionState(portfolio);
                    break;
                case 'resume':
                    transitionState(resume);
                    break;
                case 'contact':
                    transitionState(contact);
                    break;
            }

        }
    })
})
