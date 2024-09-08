const burger = document.querySelector('.nav-v2-burger');
const navMenu = document.querySelector('.nav-v2-main');
var modal = document.getElementById("myModal"); 
var btn = document.getElementById("openModalBtn"); 
var span = document.getElementsByClassName("close")[0]; 


burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var modalContent = document.getElementsByClassName("modal-content")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

modalContent.onclick = function(event) {
  event.stopPropagation(); 
}
