import MSGS from './tours.messages.model';

// ACTIONS
export function toursMsg(value){
  return {
    type: MSGS.TOURS_MESSAGE,
    value
  };
}
