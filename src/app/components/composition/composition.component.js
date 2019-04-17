import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import { map, partial } from 'ramda';

const { div, img } = hh(h);


// PRIVATE
function generateItem(dispatch, className, composition) {
  const  { order, src, alt } = composition;
  return div({ className }, [
    img({
      className: `${className}__photo ${className}__photo--p${order}`,
      src,
      alt
    }),
  ]);

}

// PUBLIC
function composition(dispatch, className, composition) {
  const generatedListItems = map( partial( generateItem, [dispatch, className]), composition );
  return div({ className }, [...generatedListItems]);
}

export default composition;
