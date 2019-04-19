import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, img } = hh(h);

// COMPONENTS
import responsiveImage from '../responsive-image/responsive-image.component';

// PUBLIC
function logoBox(className, logo) {

  const { box, image } = className;

  return div({ className: box }, [
    responsiveImage(image, logo),
  ]);

}


export default logoBox;
