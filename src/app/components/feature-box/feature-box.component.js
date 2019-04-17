import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { article, i } = hh(h);

// import headline from '../headline/headline.component';
import headingTertiary from '../heading-tertiary/heading-tertiary.component';
import paragraph from '../paragraph/paragraph.component';

// PRIVATE
function generateIconFont(className) {
  return i({ className });
}

// PUBLIC
function featureBox(dispatch, className, box) {
  const { title, text } = box;
  return article({ className: 'feature-box' }, [
    generateIconFont(`feature-box__icon ${className}`),
    headingTertiary(dispatch, 'heading-tertiary util--mb-small', title),
    paragraph('feature-box__text', text),
  ]);
}

export default featureBox;
