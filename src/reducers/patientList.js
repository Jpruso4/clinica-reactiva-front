export const patientListReducer = (state = [], action) => {
  switch (action.type) {
    case "PATIENT_LIST": {
      return action.payload;
    }

    default:
      return state;
  }
};
