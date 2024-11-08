// Create selectors for navbar items
const navbar_items = document.querySelectorAll("li");
var active_nav = document.querySelector("#active");

navbar_items.forEach((listitem) => {
    listitem.addEventListener("click", () => {
        if(listitem.getAttribute("id") != "active") {
            listitem.setAttribute("id", "active");
            active_nav.removeAttribute("id");
            active_nav = document.querySelector("#active");
        }
    })
})