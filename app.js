
const navLinks = document.querySelectorAll(".links");
const sections = document.querySelectorAll("section");

function activeMenu(){
    let len=sections.length;
    while(--len && window.scrollY + 97 < sections[len].offsetTop){}
    navLinks.forEach(ltx => ltx.classList.remove("active"));
    navLinks[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);