const menubarBtn = document.querySelector(".menubar-btn");
const exitBtn = document.getElementById("exit");
const menubarContainer = document.querySelector(".menubar-container");
const menuLink = document.querySelector(".link");

menubarBtn.onclick = function () {
  menubarContainer.style.display = "block";
};

exitBtn.onclick = function () {
  menubarContainer.style.display = "none";
};
