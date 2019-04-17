import MSGS from './header.messages.model';

// ACTIONS
export function headerMsg(value){
  return {
    type: MSGS.HEADER_MESSAGE,
    value
  };
}
