import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import { map, partial } from 'ramda';

import paragraph from '../paragraph/paragraph.component';
import button from '../button/button.component';

const { div, span, article, h4, ul, li } = hh(h);

// PRIVATE
function generateItem(dispatch, items) {
  return li([items]);
}

// PUBLIC
function card(dispatch, card) {

  const { order, tourName, details, priceText, priceValue, btnCta } = card;
  const generatedItems = map( partial( generateItem, [dispatch]), details );

  return article({ className: 'card' }, [

    // CARD FRONT SIDE
    div({ className: 'card__side card__side--front' }, [

      // CARD BACKGROUND IMAGE
      div({ className: `card__picture card__picture--${order}` }),
      // CARD HEADING
      h4({ className: 'card__heading' }, [
        span({ className: `card__heading-span card__heading-span--${order}` }, [tourName]),
      ]),
      // CARD DETAILS LIST
      div({ className: 'card__details' }, [
        ul([...generatedItems])
      ]),
    ]),

    // CARD BACK SIDE
    div({ className: `card__side card__side--back card__side--back-${order}` }, [
      div({ className: 'card__cta' }, [
        div({ className: 'card__price-box' }, [
          paragraph('card__price-only', priceText),
          paragraph('card__price-value', priceValue),
        ]),
        button(dispatch, 'button button--cta button--bg-white button--br-xlarge', btnCta),
      ]),
    ]),

  ]);

}

export default card;
