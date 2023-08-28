const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");
const iqbal = document.querySelector("#iqbal");
const hasan = document.querySelector("#hasan");
window.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.pageX + "px";
  cursor.style.top = dets.pageY + "px";
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
