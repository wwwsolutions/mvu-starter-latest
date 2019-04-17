import MSGS from './footer.messages.model';

// ACTIONS
export function footerMsg(value){
  return {
    type: MSGS.FOOTER_MESSAGE,
    value
  };
}
