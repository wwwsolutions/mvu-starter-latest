import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, img } = hh(h);


// PUBLIC
function logoBox(name, logo) {
  const { src, alt } = logo;

  return div({ className: `logo__${name}` }, [
    img({ className: `logo__${name}-image`, src, alt })
  ]);

}


export default logoBox;
