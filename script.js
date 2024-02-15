const menu = document.querySelector(".nav__menu");
const menuFold = document.querySelector(".nav__menu--menu-fold");
const menuClose = document.querySelector(".nav__menu--menu-to-close");

class App {
   #event = false;
   constructor() {
      menuFold.style.display = "block";
      menuClose.style.display = "none";
      menu.addEventListener("click", this._toggleBtn.bind(this));
   }

   _toggleBtn(e) {
      if (this.#event === false) {
         menuFold.style.display = "block";
         menuClose.style.display = "none";

         this.#event = true;
      } else {
         menuFold.style.display = "none";
         menuClose.style.display = "block";

         this.#event = false;
      }
   }
}

new App();
