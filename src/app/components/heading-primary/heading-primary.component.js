import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { span, h1 } = hh(h);

// PUBLIC
function  headingPrimary(dispatch, classes, heading) {
  const [ classPrimary, classMain, classSub ] = classes;
  const [ l1, l2 ] = heading;
  return h1({ className: classPrimary }, [
    span({ className: classMain }, [l1]),
    span({ className: classSub }, [l2]),
  ]);
}

export default headingPrimary;
