/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.toggler = $('.toggler');
    this.navbarOverlay = $('.navbar-overlay');
    this.events();
  }

  events() {
    this.toggler.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.toggler.toggleClass('toggle');
    this.navbarOverlay.toggleClass('navbar-overlay--is-visible');
  }

}

export default MobileMenu;
