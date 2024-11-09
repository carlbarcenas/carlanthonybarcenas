// Create selectors for navbar items
const navbar_items = document.querySelectorAll("li");
var active_nav = document.querySelector("#active");

navbar_items.forEach((listitem) => {
    listitem.addEventListener("click", () => {
        if(listitem.getAttribute("id") != "active") {
            listitem.setAttribute("id", "active");
            active_nav.removeAttribute("id");
            active_nav = document.querySelector("#active");
            console.log(active_nav); // DELETEME, debugging
            console.log(active_nav.className);
        }
    })
})

// Listening to navbar for changes
active_nav.addEventListener("change", function() {
    var active_class = active_nav.className();

    switch (active_nav.className) {
        case 'aboutme':
            aboutme();
            break;
    }
})
