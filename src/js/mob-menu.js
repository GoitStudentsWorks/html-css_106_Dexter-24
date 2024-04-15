document.addEventListener("DOMContentLoaded", function() {
   var menuButton = document.getElementById("toggleMenu");
   var closeButton = document.getElementById("closeMenu");
   var backdrop = document.getElementById("backdrop");
   // Открыть меню при нажатии на кнопку "Menu"
   menuButton.addEventListener("click", function() {
       backdrop.classList.add("is-open");
   });
   // Закрыть меню при нажатии на кнопку "Close"
   closeButton.addEventListener("click", function() {
       backdrop.classList.remove("is-open");
   });
});