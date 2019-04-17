import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headingTertiary from '../heading-tertiary/heading-tertiary.component';
import paragraph from '../paragraph/paragraph.component';

const { div, article, figure, figcaption, img } = hh(h);

// PUBLIC
function story(dispatch, story) {
  const { headline, text, image, name } = story;
  const { src, alt } = image;

  return article({ className: 'story' }, [

    // IMAGE
    figure({ className: 'story__shape' }, [
      img({ className: 'story__image', src, alt }),
      figcaption({ className: 'story__caption' }, [name]),
    ]),
    // TEXT
    div({ className: 'story__text' }, [
      headingTertiary(dispatch, 'heading-tertiary util--mb-small', headline),
      paragraph('paragraph', text),

    ])
  ]);
}

export default story;
