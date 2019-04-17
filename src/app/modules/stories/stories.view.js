import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headingSecondary from '../../components/heading-secondary/heading-secondary.component';
import story from '../../components/story/story.component';
import button from '../../components/button/button.component';
import htmlVideo from '../../components/bg-video/bg-video.component';

const { section, div } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { title, stories, btnCta } = model.stories;
  const [ storyMarySmith, storyJackWilson ] = stories;

  return section({
    id: 'stories',
    className: 'section stories',
  }, [

    htmlVideo(dispatch, model),

    // TITLE
    div({ className: 'row util--center-inline-block' }, [
      headingSecondary(dispatch, 'heading-secondary util--mb-large util--center-block', title),
    ]),

    // STORIES
    div({ className: 'row util--center-block' }, [
      story(dispatch, storyMarySmith),
    ]),
    div({ className: 'row util--center-block' }, [
      story(dispatch, storyJackWilson),
    ]),

    // CTA BUTTON
    div({ className: 'row util--center-inline-block' }, [
      button(dispatch, 'button button--text', btnCta),
    ]),

  ]);
}

export { view as storiesView };
