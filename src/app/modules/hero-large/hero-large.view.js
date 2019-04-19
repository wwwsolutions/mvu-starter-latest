import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

// COMPONENTS
import responsiveImage from '../../components/responsive-image/responsive-image.component';

const { header } = hh(h);

// PUBLIC
function view(dispatch, model) {

  const { image1 } = model.heroLarge;

  // SECTION
  return header({
    id: 'hero-large',
    className: 'section hero-large',
  }, [

    responsiveImage('responsive-image hero-large__image', image1),
    responsiveImage('responsive-image hero-large__image', image1),

  ]);
}

export { view as heroLargeView };

