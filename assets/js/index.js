


function highlightArrow() {
    const header = document.querySelector("header");
    const arrow = document.getElementById("arrow");
    const arrowShaft = document.querySelector(".bar");


    arrow.addEventListener("mouseover", () => {
        arrow.style.borderRight = "0.6rem solid rgb(138, 193, 248)";
        arrow.style.borderBottom = "0.6rem solid rgb(138, 193, 248)";
        arrowShaft.classList.add("skyblue-shaft");
    });

    arrow.addEventListener("mouseout", () => {
        arrow.style.borderRight = "0.5rem solid white";
        arrow.style.borderBottom = "0.5rem solid white";
        arrowShaft.classList.remove("skyblue-shaft");
    });

    header.appendChild(arrow);
    arrow.appendChild(arrowShaft);
};
highlightArrow();