const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");
const iqbal = document.querySelector("#iqbal");
const hasan = document.querySelector("#hasan");
main.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x -10 + "px";
  cursor.style.top = dets.y -10 + "px";
});
function newCursor(somthing) {
  somthing.addEventListener("mouseover", function () {
    cursor.style.width = "100px";
    cursor.style.height = "100px";
  });
  somthing.addEventListener("mouseleave", function () {
    cursor.style.width = "20px";
    cursor.style.height = "20px";
  });
}
newCursor(iqbal);
newCursor(hasan);
