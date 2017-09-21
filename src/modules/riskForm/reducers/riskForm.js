/**
 * Created by haunguyen on 5/22/17.
 */
import { SUBMIT_FORM } from '../actions/riskForm';

const initialState = {
  contactEmail: '',
  contactName: '',
  contactPhone: '',
  location: '',
  notes: '',
  observationDate: '',
  privacyPolicy: false,
  publishReport: 'yes',
  reportDate: '',
};

export default function riskForm(state = initialState, action = {}) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SUBMIT_FORM:
      return newState;

    default:
      return newState;
  }
}

