/* DOCUMENT INFORMATION [Update.js]

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

// IMPORT MESSAGES
import NAVIGATION from './modules/navigation/navigation.messages.model';
import HEADER from './modules/header/header.messages.model';
import ABOUT from './modules/about/about.messages.model';
import FEATURES from './modules/features/features.messages.model';
import TOURS from './modules/tours/tours.messages.model';
import STORIES from './modules/stories/stories.messages.model';
import BOOKING from './modules/booking/booking.messages.model';
import FOOTER from './modules/footer/footer.messages.model';
import POPUP from './modules/popup/popup.messages.model';

// ...

// AGGREGATE MESSAGES
const MSGS = {
  ...NAVIGATION,
  ...HEADER,
  ...ABOUT,
  ...FEATURES,
  ...TOURS,
  ...STORIES,
  ...BOOKING,
  ...FOOTER,
  ...POPUP,

  // ...
};


function update(msg, model) {

  // LOGGING/DEBUGGING MESSAGES
  console.log('message: ', msg);

  // FORM1 LOGIC
  switch (msg.type) {

    case MSGS.HERO_MESSAGE: {
      return model;
    }

    // ...

  }

  return model;

}


export default update;
