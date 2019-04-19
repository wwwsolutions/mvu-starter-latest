import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import logoBox from '../../components/logo-box/logo-box.component';
import menu from '../../components/menu/menu.component';

const { footer, div, a, p } = hh(h);
// PUBLIC
function view(dispatch, model) {

  const { logo, list } = model.footer;

  return footer({
    id: 'footer',
    className: 'section footer',
  }, [

    // LOGO
    logoBox({ box: 'footer__logo', image: 'responsive-image footer__logo-image' }, logo),


    div({ className: 'row' }, [

      // COLUMN LEFT
      div({ className: 'col-1-of-2' }, [

        // FOOTER NAVIGATION
        div({ className: 'footer__navigation' }, [

          // NAVIGATION MENU
          menu(dispatch, ['footer__list', 'footer__item', 'footer__link'], list),

        ]),

      ]),

      // COLUMN RIGHT
      div({ className: 'col-1-of-2' }, [

        // TODO
        // MAKE MULTILINE HTML EMBEDED COMPONENT
        // FUNCTION MUST PARSE HTML TAGS

        // COPYRIGHT
        p({ className: 'footer__copyright' }, [
          'Build my',
          a({ className: 'footer__link', href: '#' }, ['Jonas Schmedtmann']),
          'for his online course.',
          a({ className: 'footer__link', href: '#' }, ['Advanced CSS and Sass.']),
          'Copyright © by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated.'

        ]),

      ]),

    ]),

  ]);
}

export { view as footerView };
