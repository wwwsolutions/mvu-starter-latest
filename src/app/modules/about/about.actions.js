/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

import MSGS from './about.messages.model';

// ACTIONS
export function aboutMsg(value){
  return {
    type: MSGS.ABOUT_MESSAGE,
    value
  };
}
