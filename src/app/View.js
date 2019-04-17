import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, main } = hh(h);

// MODULES/PAGE SECTIONS
import { navigationView } from './modules/navigation/navigation.view';
import { headerView } from './modules/header/header.view';
import { aboutView } from './modules/about/about.view';
import { featuresView } from './modules/features/features.view';
import { toursView } from './modules/tours/tours.view';
import { storiesView } from './modules/stories/stories.view';
import { bookingView } from './modules/booking/booking.view';
import { footerView } from './modules/footer/footer.view';
import { popupView } from './modules/popup/popup.view';


// VIEWS
function view(dispatch, model) {
  return div([

    navigationView(dispatch, model),
    headerView(dispatch, model),

    main([
      aboutView(dispatch, model),
      featuresView(dispatch, model),
      toursView(dispatch, model),
      storiesView(dispatch, model),
      bookingView(dispatch, model),

    ]),

    footerView(dispatch, model),
    popupView(dispatch, model),

  ]);
}

export default view;
