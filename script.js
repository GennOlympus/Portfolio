// toggle resp

const NavSlide =() => {
    const burger = document.querySelector(".burger")
    const NavList = document.querySelector("nav")

    burger.addEventListener("click",() => {
        NavList.classList.toggle ("nav-active")
        burger.classList.toggle("toggle-burger");
    });
};

NavSlide();

// Clear
window.onbeforeunload = () => {
for (const form of document.getElementsByTagName("form")) {
    form.reset();
}
}
;

