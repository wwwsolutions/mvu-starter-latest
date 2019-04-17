import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { div, form, label, input, span, button } = hh(h);


import headingSecondary from '../heading-secondary/heading-secondary.component';

function formBooking(dispatch, model) {
  const { title, btnSubmit } = model.booking;


  return form({
    className: 'form-booking',
    attributes: {
      action: '#'
    }
  }, [

    // TITLE
    div({ className: 'util--mb-medium' }, [
      headingSecondary(dispatch, 'heading-secondary', title),
    ]),

    // GROUP NAME
    div({ className: 'form-booking__group' }, [
      input({
        className: 'form-booking__input',
        id: 'name',
        type: 'text',
        placeholder: 'Full Name',
        attributes: {
          required: '',
        }
      }),
      label({
        className: 'form-booking__label',
        attributes: {
          for: 'name',
        }
      }, ['Full name']),
    ]),

    // GROUP EMAIL
    div({ className: 'form-booking__group' }, [
      input({
        className: 'form-booking__input',
        id: 'email',
        type: 'email',
        placeholder: 'Email address',
        attributes: {
          required: '',
        }
      }),
      label({
        className: 'form-booking__label',
        attributes: {
          for: 'email',
        }
      }, ['Email address']),
    ]),

    // GROUP RADIO BUTTONS
    div({ className: 'form-booking__group' }, [

      // SMALL TOUR GROUP
      div({ className: 'form-booking__radio-group' }, [
        input({
          className: 'form-booking__radio-input',
          id: 'small',
          name: 'size',
          type: 'radio',
        }),
        label({
          className: 'form-booking__radio-label',
          attributes: {
            for: 'small',
          }
        }, [
          span({ className: 'form-booking__radio-button' }),
          'Small tours group'
        ]),
      ]),

      // LARGE TOUR GROUP
      div({ className: 'form-booking__radio-group' }, [
        input({
          className: 'form-booking__radio-input',
          id: 'large',
          name: 'size',
          type: 'radio',
        }),
        label({
          className: 'form-booking__radio-label',
          attributes: {
            for: 'large',
          }
        }, [
          span({ className: 'form-booking__radio-button' }),
          'Large tours group'
        ]),
      ]),

      // SUBMIT BUTTON
      button({
        className: 'button button--cta button--bg-green button--br-xlarge util--mt-large',
      }, [btnSubmit.title]),

    ]),
  ]);

}

export default formBooking;
