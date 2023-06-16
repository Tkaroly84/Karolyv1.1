//Késleltetett Popup doboz, mely kattintásra eltűnik
setTimeout(function() {
    var popupOverlay = document.querySelector('.popup-overlay');

    popupOverlay.classList.add('active');

    popupOverlay.addEventListener('click', function() {
        popupOverlay.classList.remove('active');
    });

    var popup = document.querySelector('.popup');

    popup.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}, 1000);

//Hamburger-menü
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Csevegés gomb
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

                                                //slider

  var images = document.querySelectorAll('.slider img');
  var index = 0;
  var timer;

  function showNextImage() {
    images[index].style.zIndex = 1; // Elrejtjük az aktuális képet
    index = (index + 1) % images.length; // Következő index kiszámítása
    images[index].style.zIndex = 5; // Megjelenítjük a következő képet
  }

  function startSlideShow() {
    timer = setInterval(showNextImage, 2000); // Időzített függvényhívás
  }

  function stopSlideShow() {
    clearInterval(timer); // Időzítés megszakítása
  }

  // Az első kép megjelenítése
  images[index].style.zIndex = 5;

  // Egér belépése a slider területére
  document.querySelector('.slider').addEventListener('mouseenter', stopSlideShow);

  // Egér kilépése a slider területéről
  document.querySelector('.slider').addEventListener('mouseleave', startSlideShow);

  // Slide show indítása
  startSlideShow();

                                                //slider elnavigál
function sliderfunction(){
        window.open('https://www.canon.hu/');
      }