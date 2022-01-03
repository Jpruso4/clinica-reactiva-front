const PatientDetail = ({ patientDetail }) => {
  return (
    <div className="detailsContainer">
      <h2>Detalles del paciente</h2>
      {patientDetail && (
        <div>
          <p>
            id: <span>{patientDetail.id}</span>
          </p>
          <p>
            Nombre:{" "}
            <span>{`${patientDetail.nombrePaciente} ${patientDetail.apellidosPaciente}`}</span>
          </p>
          <p>
            Medico:{" "}
            <span>{`${patientDetail.nombreMedico} ${patientDetail.apellidosMedico}`}</span>
          </p>
          <p>
            Fecha: <span>{patientDetail.fechaReservaCita}</span>
          </p>
          <p>
            Hora: <span>{patientDetail.horaReservaCita}</span>
          </p>
          <p>
            Estado Reserva: <span>{patientDetail.estadoReservaCita}</span>
          </p>
          <p>
            Estado Cita: <span>{patientDetail.estadoCita}</span>
          </p>
          <p>
            Padecimiento: <span>{patientDetail.padecimientos}</span>
          </p>
          <p>
            Tratamientos: <span>{patientDetail.tratamientos}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientDetail;
