/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {

  constructor() {
    this.lazyImages = $('.lazyLoad');
    this.navbar = $('.navbar');
    this.triggerElement = $('.grid__hero-item');
    this.pageSections = $('.section');
    this.navLinks = $('.nav__link');
    this.toggler = $('.toggler');
    this.navbarOverlay = $('.navbar-overlay');
    this.logo = $('.logo');
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.navLinks.smoothScroll({
      easing: 'swing',
      speed: 'auto',
      autoCoefficient: 2.5,
      // CLOSE SLIDING MENU IF OPENED
      beforeScroll: () => {
        this.toggler.toggleClass('toggle');
        this.navbarOverlay.toggleClass('navbar-overlay--is-visible');
      },
      // COMPESATE FOR NAVBAR HEIGHT
      offset: -59
   });
  }

  createHeaderWaypoint() {
    new Waypoint({
      element: this.triggerElement[0],
      handler: direction => {
          if(direction === 'down') {
            this.navbar.addClass('navbar--bg-dark');
            this.logo.addClass('logo--small')
          } else {
            this.navbar.removeClass('navbar--bg-dark');
            this.logo.removeClass('logo--small')
          }
        }
      });
  }

  createPageSectionWaypoints() {
    const that = this;
     this.pageSections.each( function() {
       const currentPageSection = this;
       new Waypoint({
         element: currentPageSection,
          handler: direction => {
           if (direction === 'down') {

            const currentId = currentPageSection.getAttribute('id');

            // GET NAVIGATION LINKS & MOBILE NAVIGATION LINKS
            // const style = currentPageSection.getAttribute('class');
            const matchingNavLink = currentPageSection.getAttribute('data-matching-link');
            const matchingMobileLink = currentPageSection.getAttribute('data-matching-link-mobile');

            // RESET NAVIGATION LINK CLASSES
            that.navLinks.attr('class', 'nav__link');

            // SET NAVIGATION LINK CLASS
            currentId === 'header' ? $(matchingNavLink).addClass('nav--is-current-link-inverted') : $(matchingNavLink).addClass('nav--is-current-link');
            $(matchingMobileLink).addClass('nav--is-current-link');

          }
         },
        offset: '18%'


       });

       new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'up') {
            const currentId = currentPageSection.getAttribute('id');
            const matchingNavLink = currentPageSection.getAttribute('data-matching-link');
            const matchingMobileLink = currentPageSection.getAttribute('data-matching-link-mobile');
            that.navLinks.attr('class', 'nav__link');
            currentId === 'header' ? $(matchingNavLink).addClass('nav--is-current-link-inverted') : $(matchingNavLink).addClass('nav--is-current-link');
            $(matchingMobileLink).addClass('nav--is-current-link');
         }
        },
        offset: '-40%'
      });

    });
  }

}

export default StickyHeader;
