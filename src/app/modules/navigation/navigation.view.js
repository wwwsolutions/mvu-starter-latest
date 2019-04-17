import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import menu from '../../components/menu/menu.component';

const { nav, div, input, label, span } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { list } = model.navigation;

  return div({
    id: 'navigation',
    className: 'section navigation',
  }, [


    input({
      className: 'navigation__checkbox',
      id: 'nav-toggle',
      type: 'checkbox',
    }),

    // HAMBURGER MENU
    label({
      className: 'navigation__button',
      attributes: {
        for: 'nav-toggle',
      }
    }, [
      span({ className: 'navigation__icon' }, [' ']),
    ]),


    div({ className: 'navigation__background' }, [' ']),
    nav({ className: 'navigation__nav' }, [

      // NAVIGATION MENU
      menu(dispatch, ['navigation__list', 'navigation__item', 'navigation__link'], list),

    ]),

  ]);
}

export { view as navigationView };
