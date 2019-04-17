
/* DOCUMENT INFORMATION

  > MODELS AGGREGATION
  > MERGES IMPORTED MODELS INTO ONE OBJECT EXPOSING IT AS THE INIT_MODEL

*//////////////////////////////////////////////////

// SWITCH BETWEEN BREAKPOINTS
// SELECT ONE OF RESPONSIVE DESIGN STRATEGIES: @DESKTOP-FIRST OR @MOBILE-FIRST
// SELECTED MUST CORRESPOND TO /build-utils/webpack/postcss/postcss.config.js SETTINGS

// import { breakpoints } from '../presets/responsive/@mobile-first/breakpoints';
import { breakpoints } from '../presets/responsive/@desktop-first/breakpoints';

// IMPORT MODELS
import { headerModel } from './modules/header/header.model';
import { navigationModel } from './modules/navigation/navigation.model';
import { aboutModel } from './modules/about/about.model';
import { featuresModel } from './modules/features/features.model';
import { toursModel } from './modules/tours/tours.model';
import { storiesModel } from './modules/stories/stories.model';
import { bookingModel } from './modules/booking/booking.model';
import { footerModel } from './modules/footer/footer.model';
import { popupModel } from './modules/popup/popup.model';

// ...

// MERGE/AGGREGATE MODELS
export const initModel = {

  // BREAKPOINTS
  ...breakpoints,

  // MODELS
  ...navigationModel,
  ...headerModel,
  ...aboutModel,
  ...featuresModel,
  ...toursModel,
  ...storiesModel,
  ...bookingModel,
  ...footerModel,
  ...popupModel,

  // ...

};

// LOGGING/DEBUGGING MODEL
console.dir(initModel);

export default initModel;
