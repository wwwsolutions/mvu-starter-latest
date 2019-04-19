import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

// COMPONENTS
import logoBox from '../../components/logo-box/logo-box.component';
import headingPrimary from '../../components/heading-primary/heading-primary.component';
import button from '../../components/button/button.component';


const { div, header } = hh(h);

// PUBLIC
function view(dispatch, model) {

  const { logo, heading, btnCta } = model.header;

  // SECTION
  return header({
    id: 'header',
    className: 'section header',
  }, [

    // LOGO
    logoBox({ box: 'header__logo', image: 'responsive-image header__logo-image' }, logo),

    div({ className: 'header__text-box header__text-box--pull-up' }, [

      // HEADING PRIMARY
      headingPrimary(dispatch, [
        'heading-primary animation--shaking-bug-fix',
        'heading-primary__main animation--move-in-left animation--duration-one-second animation--timing-ease-aut',
        'heading-primary__sub  animation--move-in-right animation--duration-one-second animation--timing-ease-aut'
      ], heading),

      // BUTTON CTA
      button(dispatch, 'button button--cta button--bg-white button--br-xlarge util--mt-large animation--move-in-bottom animation--duration-half-second animation--fill-mode-backwards animation--delay-three-quarters-second animation--timing-ease-aut', btnCta),

    ])

  ]);
}

export { view as headerView };
