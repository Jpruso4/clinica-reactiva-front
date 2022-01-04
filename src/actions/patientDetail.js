export const getPatientDetail = (id) => {
  return (dispatch) => {
    window
      .fetch(
        `https://app-clinica-reactiva.herokuapp.com/citasReactivas/${id}/byidPaciente`
      )
      .then((response) => response.json())
      .then((data) => {
        dispatch(patientDetail(data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const patientDetail = (patientDetail) => ({
  type: "PATIENT_DETAIL",
  payload: patientDetail[0]
});
