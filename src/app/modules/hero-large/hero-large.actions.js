import MSGS from './hero-large.messages.model';

// ACTIONS
export function heroLargeMsg(value){
  return {
    type: MSGS.HERO_LARGE_MESSAGE,
    value
  };
}
