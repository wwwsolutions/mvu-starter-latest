/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './features.messages.model';

// ACTIONS
export function featuresMsg(value){
  return {
    type: MSGS.FEATURES_MESSAGE,
    value
  };
}
