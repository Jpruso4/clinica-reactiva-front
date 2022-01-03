export const getPatients = () => {
  return (dispatch) => {
    window
      .fetch("https://citas-app-back.herokuapp.com/citasReactivas")
      .then((response) => response.json())
      .then((data) => {
        dispatch(patientList(data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const patientList = (patients) => ({
  type: "PATIENT_LIST",
  payload: patients
});
