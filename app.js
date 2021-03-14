let navbarBars = document.querySelector(".navbar__bars")
let sidebarCloseBtn = document.querySelector(".header__close-btn")
let sidebarMenu = document.querySelector(".sidebar-menu")


function sidebarOpen() {
    sidebarMenu.classList.remove("sidebar-menu-close");
    sidebarMenu.classList.add("sidebar-menu-open");
}

function sidebarClose() {
    sidebarMenu.classList.remove("sidebar-menu-open");
    sidebarMenu.classList.add("sidebar-menu-close");
}

navbarBars.addEventListener("click", sidebarOpen);
sidebarCloseBtn.addEventListener("click", sidebarClose);



// topic menu
let sidebarMenuTopics = document.querySelector(".sidebar-menu__topics");

function openTopic(event) {
    let topic = event.target.closest(".sidebar-menu__topic__inner").nextElementSibling;
    topic.classList.toggle("topic__topic-items--open")
}

sidebarMenuTopics.addEventListener("click", openTopic)


// other stuff
sidebarMenuTopics.firstElementChild.style.backgroundColor = "rgb(30, 30, 30)"




/*import to use lots of helper functions to separate your logic*/