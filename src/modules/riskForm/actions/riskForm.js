/**
 * Created by haunguyen on 5/22/17.
 */
export const SUBMIT_FORM = 'riskForm/SUBMIT';

export function onRiskFormSubmit(riskFormData) {
  return {
    type: SUBMIT_FORM,
    data: riskFormData,
  };
}
