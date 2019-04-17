import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';


import headingSecondary from '../../components/heading-secondary/heading-secondary.component';
import headingTertiary from '../../components/heading-tertiary/heading-tertiary.component';
import paragraph from '../../components/paragraph/paragraph.component';
import button from '../../components/button/button.component';


const { footer, div, ul, li, a, p, img } = hh(h);


// PUBLIC
function view(dispatch, model) {

  // const { logo } = model.footer;

  const { title, subtitle, btnPopup, btnPopupClose } = model.popup;
  const [ c1, c2 ]  = model.popup.copies;
  // const [ h1, h2 ] = model.about.headlines;
  // const cmpstn = model.about.composition;

  return div({
    id: 'popup',
    className: 'section popup',
    // attributes: {
    //   'data-matching-link': '#horizontal-ecosystem-link',
    //   'data-matching-link-mobile': '#vertical-ecosystem-link'
    // }
  }, [

    div({ className: 'popup__content' }, [
      div({ className: 'popup__left' }, [
        img({
          className: 'popup__image',
          src: '/assets/images/nat-8.jpg',
          alt: 'Tour photo'
        }),
        img({
          className: 'popup__image',
          src: '/assets/images/nat-9.jpg',
          alt: 'Tour photo'
        }),

      ]),
      div({ className: 'popup__right' }, [
        button(dispatch, 'popup__close', btnPopupClose),
        headingSecondary(dispatch, 'heading-secondary util--mb-small util--center-block', title),
        headingTertiary(dispatch, 'heading-tertiary util--mb-small', subtitle),
        paragraph('paragraph popup__text', c2),
        button(dispatch, 'button button--bg-green button--br-xlarge button--mt-small', btnPopup),

      ]),

    ]),

    // LOGO
    // logoBox(dispatch, ['footer__logo-box', 'footer__logo'], logo),

    // div({ className: 'row' }, [

    //   // COLUMN LEFT
    //   div({ className: 'col-1-of-2' }, [

    //     // FOOTER NAVIGATION
    //     div({ className: 'footer__navigation' }, [
    //       ul({ className: 'footer__list' }, [
    //         li({ className: 'footer__item' }, [
    //           a({ className: 'footer__link', href: '#' }, 'Company'),
    //         ]),
    //         li({ className: 'footer__item' }, [
    //           a({ className: 'footer__link', href: '#' }, 'Contack us'),
    //         ]),
    //         li({ className: 'footer__item' }, [
    //           a({ className: 'footer__link', href: '#' }, 'Careers'),
    //         ]),
    //         li({ className: 'footer__item' }, [
    //           a({ className: 'footer__link', href: '#' }, 'Privacy policy'),
    //         ]),
    //         li({ className: 'footer__item' }, [
    //           a({ className: 'footer__link', href: '#' }, 'Terms'),
    //         ]),
    //       ]),
    //     ]),

    //   ]),

    //   // COLUMN RIGHT
    //   div({ className: 'col-1-of-2' }, [

    //     // COPYRIGHT
    //     p({ className: 'footer__copyright' }, [
    //       'Build my',
    //       a({ className: 'footer__link', href: '#' }, ['Jonas Schmedtmann']),
    //       'for his online course.',
    //       a({ className: 'footer__link', href: '#' }, ['Advanced CSS and Sass.']),
    //       'Copyright © by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated.'

    //     ]),

    //   ]),

    // ]),

    // // TITLE
    // div({ className: 'row util--center-inline-block' }, [
    //   headingSecondary(dispatch, 'heading-secondary util--mb-large util--center-block', title),
    // ]),

    // div({ className: 'row' }, [
    //   div({ className: 'col-1-of-2' }, [

    //     headingTertiary(dispatch, 'heading-tertiary util--mb-small', h1),
    //     paragraph('paragraph', c1),

    //     headingTertiary(dispatch, 'heading-tertiary util--mb-small', h2),
    //     paragraph('paragraph', c2),

    //     // button(dispatch, 'button button--cta button--bg-white button--br-xlarge button--mt-large animation--move-in-bottom animation--duration-half-second animation--fill-mode-backwards animation--delay-three-quarters-second animation--timing-ease-aut', btnAbout),
    //     button(dispatch, 'button button--text', btnAbout),

    //   ]),

    //   // IMAGE COMPOSITION
    //   div({ className: 'col-1-of-2' }, [

    //     composition(dispatch, 'composition', cmpstn),

    //   ]),

    // ]),

    // div({ className: 'grid__container' }, [
    //   // headline(dispatch, h2, 'headline headline--underlined headline--text-align-center', title),
    // ]),

    // COPY SECTION
    // div({ className: 'grid__container' }, [
    //   // paragraph('paragraph paragraph--fs-larger', c1),
    //   // paragraph('paragraph paragraph--fs-larger', c2),
    // ]),

    // CARD DECK FEATURES
    // div({ className: 'grid__container' }, [
    //   div({ className: 'grid__ecosystem-deck' }, [
    //     div({ className: 'grid__ecosystem-card' }, [

    //       // GENERATE CARD
    //       card(dispatch, cardNpm),

    //     ]),
    //     div({ className: 'grid__ecosystem-card' }, [

    //       // GENERATE CARD
    //       card(dispatch, cardWebpack),

    //     ]),
    //     div({ className: 'grid__ecosystem-card' }, [

    //       // GENERATE CARD
    //       card(dispatch, cardES6),

    //     ]),
    //     div({ className: 'grid__ecosystem-card' }, [

    //       // GENERATE CARD
    //       card(dispatch, cardPostCSS),

    //     ]),
    //   ]),
    // ])

  ]);
}

export { view as popupView };
