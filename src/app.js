/* DOCUMENT INFORMATION

  ROOT OF SINGLE PAGE APLICATION (SPA).
  IMPORTS PLUGINS, FONTS, STYLES.
  APPLICATION INITIALIZATION.

*/

/* APPLICATION IMPORTS
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
  ------------------------------------------------------------------------------------------------------------- */

// [PLUGINS]
import '@babel/runtime/regenerator';

// [ICONS]

// [FONTS]
/*
import './assets/fonts/Lato/Lato-Black.css';
import './assets/fonts/Lato/Lato-BlackItalic.css';
import './assets/fonts/Lato/Lato-Bold.css';
import './assets/fonts/Lato/Lato-BoldItalic.css';
import './assets/fonts/Lato/Lato-Hairline.css';
import './assets/fonts/Lato/Lato-HairlineItalic.css';
import './assets/fonts/Lato/Lato-Italic.css';
import './assets/fonts/Lato/Lato-LightItalic.css';
*/
import './assets/fonts/Lato/Lato-Light.css';
import './assets/fonts/Lato/Lato-Regular.css';
import './assets/fonts/Linea/Linea-FontIcons.css';

// [STYLES]
import './styles/postcss/main.css';

// [APPLICATION LOGIC]
// import MobileMenu from './app/functionality/MobileMenu';
// import StickyHeader from './app/functionality/StickyHeader';
// import RevealOnScroll from './app/functionality/RevealOnScroll';


/* IMPORT MODEL-VIEW-UPDATE (MVU) PATTERN
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
  > DOCS: https://guide.elm-lang.org/architecture/
  ------------------------------------------------------------------------------------------------------------- */
import initModel from './app/Model';
import view from './app/View';
import update from './app/Update';
import runtime from './app/Runtime';


/* APPLICATION INITIALIZATION
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >
  ------------------------------------------------------------------------------------------------------------- */
window.addEventListener('load', () => {

  /* [APPLICATION]
    ----------------------------- */
  const node = document.getElementById('app');
  runtime(initModel, update, view, node);

  // [MOBILE_MENU]
  // const mobileMenu = new MobileMenu();

  // [STICKY_HEADER]
  // const navbarStickyHeader = new StickyHeader();

  // [REVEAL_ON_SCROL]
  // const cardsRevealOnScroll = new RevealOnScroll({
  //   elements: 'card',
  //   offset: '85%',
  //   start: 'reveal-item--opacity-hidden reveal-item--scale-up',
  //   end: 'reveal-item--opacity-visible reveal-item--scale-default reveal-item--transition-slow'
  // });

  // const featuresRevealOnScroll = new RevealOnScroll({
  //   elements: 'list__item',
  //   offset: '70%',
  //   start: 'reveal-item--opacity-hidden',
  //   end: 'reveal-item--transition-fast reveal-item--opacity-visible'
  // });

}); // LOAD EVENT LISTENER
