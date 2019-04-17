import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { h2 } = hh(h);

// PUBLIC
function  headingSecondary(dispatch, className, heading) {
  return h2({ className }, [heading]);
}

export default headingSecondary;
