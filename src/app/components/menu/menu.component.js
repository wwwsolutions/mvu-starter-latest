import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import { map, partial } from 'ramda';

const { span, ul, li, a } = hh(h);

// PRIVATE
function generateItem(dispatch, classItem, classLink, item) {
  const { numeration = undefined, href, title } = item;
  return li({ className: classItem }, [
    a({ className: classLink, href }, [
      (numeration !== undefined) ? span(numeration) : undefined,
      title
    ]),
  ]);
}

// PUBLIC
function  menu(dispatch, classes, item) {
  const [ classList, classItem, classLink ] = classes;
  const items = map( partial( generateItem, [dispatch, classItem, classLink]), item );
  return ul({ className: classList }, [...items]);
}

export default menu;
