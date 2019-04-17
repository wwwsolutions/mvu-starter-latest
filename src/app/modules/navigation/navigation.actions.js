import MSGS from './navigation.messages.model';

// ACTIONS
export function navigationMsg(value){
  return {
    type: MSGS.NAVIGATION_MESSAGE,
    value
  };
}
