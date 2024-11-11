// Create selectors for navbar items
const navbar_items = document.querySelectorAll("li");
var active_nav = document.querySelector("#active");

navbar_items.forEach((listitem) => {
    listitem.addEventListener("click", () => {
        if(listitem.getAttribute("id") != "active") {
            listitem.setAttribute("id", "active");              // Set clicked item as "active" ID
            active_nav.removeAttribute("id");                   // Remove "active" ID from old selection
            active_nav = document.querySelector("#active");     // Update active_nav variable
            
            // Update L + R Panels
            switch (active_nav.className) {
                case 'aboutme':
                    aboutme();
                    break;
            }


            // DELETE ME, used for debugging
            console.log(active_nav);
            console.log(active_nav.className);
        }
    })
})
