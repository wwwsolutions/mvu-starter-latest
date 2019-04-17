import MSGS from './popup.messages.model';

// ACTIONS
export function popupMsg(value){
  return {
    type: MSGS.POPUP_MESSAGE,
    value
  };
}
