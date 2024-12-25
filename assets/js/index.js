
/* color-change arrow */

function highlightArrow() {
    const header = document.querySelector("header");
    const arrow = document.getElementById("arrow");
    const arrowShaft = document.querySelector(".bar");


    arrow.addEventListener("mouseover", () => {
        arrow.style.borderRight = "0.75rem solid rgb(138, 193, 248)";
        arrow.style.borderBottom = "0.75rem solid rgb(138, 193, 248)";
        arrowShaft.classList.add("skyblue-shaft");
    });

    arrow.addEventListener("mouseout", () => {
        arrow.style.borderRight = "0.75rem solid white";
        arrow.style.borderBottom = "0.75rem solid white";
        arrowShaft.classList.remove("skyblue-shaft");
    });

    header.appendChild(arrow);
    arrow.appendChild(arrowShaft);
};
highlightArrow();

/* Fade in upon loading the web page */

const header = document.querySelector("header");
const arrow = document.getElementById("arrow");
const navigationBar = document.querySelector("nav");
const titles = document.getElementById("titles");

let headerOpacity = 0;
let navigationOpacity = 0;
let titlesOpacity = 0;
let arrowOpacity = 0;

let fadeInHeader = setInterval(() => {
    if (headerOpacity >= 1) {
        clearInterval(fadeInHeader);
        let fadeInTitles = setInterval(() => {
            if (titlesOpacity >= 1) {
                clearInterval(fadeInTitles);
                let fadeInNavigation = setInterval(() => {
                    if (navigationOpacity >= 1) {
                        clearInterval(fadeInNavigation);
                        let fadeInArrow = setInterval(() => {
                            if (arrowOpacity >= 1) {
                                clearInterval(fadeInArrow);
                            }
                            arrow.style.opacity = arrowOpacity;
                            arrowOpacity += 0.01;
                        }, 10);
                    }
                    navigationBar.style.opacity = navigationOpacity;
                    navigationOpacity += 0.01;
                }, 10);
            }
            titles.style.opacity = titlesOpacity;
            titlesOpacity += 0.01;
        }, 10);
    }
    header.style.opacity = headerOpacity;
    headerOpacity += 0.01;
}, 5);