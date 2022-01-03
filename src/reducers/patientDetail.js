export const patientDetailReducer = (state = false, action) => {
  switch (action.type) {
    case "PATIENT_DETAIL": {
      return action.payload;
    }

    default:
      return state;
  }
};
