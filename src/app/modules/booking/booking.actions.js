import MSGS from './booking.messages.model';

// ACTIONS
export function bookingMsg(value){
  return {
    type: MSGS.BOOKING_MESSAGE,
    value
  };
}
