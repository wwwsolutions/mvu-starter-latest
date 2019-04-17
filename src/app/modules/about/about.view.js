import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headingSecondary from '../../components/heading-secondary/heading-secondary.component';
import headingTertiary from '../../components/heading-tertiary/heading-tertiary.component';
import paragraph from '../../components/paragraph/paragraph.component';
import button from '../../components/button/button.component';
import composition from '../../components/composition/composition.component';


const { section, div } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { title, headlines, copies, btn, imageComposition } = model.about;
  const [ c1, c2 ]  = copies;
  const [ h1, h2 ] = headlines;


  return section({
    id: 'about',
    className: 'section about',
  }, [

    // TITLE
    div({ className: 'row util--center-inline-block' }, [
      headingSecondary(dispatch, 'heading-secondary util--mb-large util--center-block', title),
    ]),

    div({ className: 'row' }, [
      div({ className: 'col-1-of-2' }, [

        headingTertiary(dispatch, 'heading-tertiary util--mb-small', h1),
        paragraph('paragraph', c1),

        headingTertiary(dispatch, 'heading-tertiary util--mb-small', h2),
        paragraph('paragraph', c2),

        button(dispatch, 'button button--text', btn),

      ]),

      // IMAGE COMPOSITION
      div({ className: 'col-1-of-2' }, [

        composition(dispatch, 'composition', imageComposition),

      ]),

    ]),

  ]);
}

export { view as aboutView };
