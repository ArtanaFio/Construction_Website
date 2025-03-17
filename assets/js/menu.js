
function clickMenuButton() {
    const menuButton = document.getElementById("menu-toggle");
    const links = document.querySelectorAll(".nav-opt");
    const linkText = document.querySelectorAll(".tabs");
    
    links.forEach(link => {
        link.classList.add("off-menu");
    });

    linkText.forEach(text => {
        text.classList.add("off-menu-link");
    });

    menuButton.addEventListener("click", () => {
        links.forEach(link => {
            link.classList.toggle("on-menu");
            link.classList.toggle("off-menu");
        });

        linkText.forEach(text => {
            text.classList.toggle("on-menu-link");
            text.classList.toggle("off-menu-link");
        });
    });
};
clickMenuButton();