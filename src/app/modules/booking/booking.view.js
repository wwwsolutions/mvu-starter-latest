import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import formBooking from '../../components/form-booking/form-booking.component';

const { section, div } = hh(h);


// PUBLIC
function view(dispatch, model) {

  const { title, stories, btnCta } = model.booking;

  return section({
    id: 'booking',
    className: 'section booking',
  }, [


    div({ className: 'row' }, [

      div({ className: 'book' }, [
        div({ className: 'book__form' }, [

          formBooking(dispatch, model),

        ]),

      ]),

    ]),

  ]);
}

export { view as bookingView };
