const container = document.querySelector("#container");
const loveIcon = document.querySelector("i");
container.addEventListener("dblclick", function () {
  loveIcon.style.transform = "translate(-50%, -50%) scale(1.5)";
  loveIcon.style.opacity = 0.8;

  setTimeout(() => {
    loveIcon.style.opacity = 0;
    loveIcon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
