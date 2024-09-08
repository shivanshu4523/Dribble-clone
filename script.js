const burger = document.querySelector('.nav-v2-burger');
const navMenu = document.querySelector('.nav-v2-main');
var modal = document.getElementById("myModal"); 
var btn = document.getElementById("openModalBtn"); 
var span = document.getElementsByClassName("close")[0]; 

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

var openModalButtons = document.querySelectorAll('[id^="openModalBtn"]');

openModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

var modalContent = document.getElementsByClassName("modal-content")[0];

modalContent.onclick = function(event) {
    event.stopPropagation();
}

const followButtons = document.querySelectorAll('#click1, #click2, #click3, #click4, #click5');

followButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        alert('You need to SignIn First!!');
    });
});