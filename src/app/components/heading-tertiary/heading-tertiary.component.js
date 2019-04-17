import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { h3 } = hh(h);

// PUBLIC
function  headingTertiary(dispatch, className, heading) {
  return h3({ className }, [heading]);
}

export default headingTertiary;
