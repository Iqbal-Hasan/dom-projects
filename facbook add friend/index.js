const statusCard = document.querySelector("#status");
const addFriend = document.querySelector("#add-friend");
const button = document.querySelector("button");
const icon = document.querySelector("#icon");
button.addEventListener("click", function () {
  if (addFriend.innerText === "Add Friend") {
    addFriend.innerHTML = "Friend";
    button.style.backgroundColor = "#4B4C4F";
    icon.classList.add("fa-user-check");
    icon.classList.remove("fa-user-plus");
    statusCard.innerHTML = "Friend";
    statusCard.style.color = "green";
  } else {
    addFriend.innerHTML = "Add Friend";
    button.style.backgroundColor = "#2374E1";
    icon.classList.remove("fa-user-check");
    icon.classList.add("fa-user-plus");
    statusCard.innerHTML = "Stranger";
    statusCard.style.color = "red";
  }
});
button.addEventListener("mouseover", function () {
  icon.classList.add("fa-bounce");
});
button.addEventListener("mouseleave", function () {
  icon.classList.remove("fa-bounce");
});
