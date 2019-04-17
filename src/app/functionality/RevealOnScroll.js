/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import $ from 'jquery';
import waypoints from 'waypoints/lib/noframework.waypoints';

class RevealOnScroll {

  constructor({ elements, offset, start, end }) {
    this.itemsToReveal = $(`.${elements}`);
    this.offsetPercentage = offset;
    this.start = start;
    this.end = end;
    this.hideInitialy();
    this.createWaypoints();
  }

  hideInitialy() {
    this.itemsToReveal.addClass(this.start);
  }

  createWaypoints() {
    const that = this;
    this.itemsToReveal.each( function() {
      const currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).removeClass(that.start);
          $(currentItem).addClass(that.end);
        },
        offset: that.offsetPercentage
      });
    });
  }

}

export default RevealOnScroll;
