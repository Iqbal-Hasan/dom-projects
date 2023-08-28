const cursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");
const img = document.querySelector("img");

window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("link-grow");
    link.style.color = "white";
    link.style.zIndex = 1;
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("link-grow");
    link.style.color = "black";
  });
});
img.addEventListener('mouseover', ()=>{
    cursor.classList.add("img-link-grow");
    
})
img.addEventListener('mouseleave', ()=>{
    cursor.classList.remove("img-link-grow");
})