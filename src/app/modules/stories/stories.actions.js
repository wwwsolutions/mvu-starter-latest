import MSGS from './stories.messages.model';

// ACTIONS
export function storiesMsg(value){
  return {
    type: MSGS.STORIES_MESSAGE,
    value
  };
}
