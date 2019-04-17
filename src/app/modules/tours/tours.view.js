import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import headingSecondary from '../../components/heading-secondary/heading-secondary.component';
import card from '../../components/card/card.component';
import button from '../../components/button/button.component';

// import paragraph from '../../components/paragraph/paragraph.component';
// import list from '../../components/list/list.component';

const { div, section, h2, h3, h5, i } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { title, btn, cards } = model.tours;
  const [ cardSeaExplorer, cardForestHiker, cardSnowAdventurer ] = cards;

  return section({
    id: 'tours',
    className: 'section tours',
  }, [

    // TITLE
    div({ className: 'row util--center-inline-block' }, [
      headingSecondary(dispatch, 'heading-secondary util--mb-large util--center-block', title),
    ]),

    // CARDS
    div({ className: 'row' }, [
      div({ className: 'col-1-of-3' }, [
        // card(dispatch, 'card__picture card__picture--1', cardSeaExplorer),
        card(dispatch, cardSeaExplorer),
      ]),
      div({ className: 'col-1-of-3' }, [
        // card(dispatch, 'card__picture card__picture--2', cardForestHiker),
        card(dispatch, cardForestHiker),
      ]),
      div({ className: 'col-1-of-3' }, [
        // card(dispatch, 'card__picture card__picture--3', cardSnowAdventurer),
        card(dispatch, cardSnowAdventurer),
      ]),
    ]),

    // CTA BUTTON
    div({ className: 'row util--center-inline-block' }, [
      button(dispatch, 'button button--cta button--bg-green button--br-xlarge util--mt-huge animation--move-in-bottom animation--duration-half-second animation--fill-mode-backwards animation--delay-three-quarters-second animation--timing-ease-aut', btn),
    ]),

  ]);
}

export { view as toursView };
