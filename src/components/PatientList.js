const PatientList = ({ patients, getPatient }) => {
  return (
    <div>
      <div className="patientCard headerTitle">
        <p>Id</p>
        <p>Nombre</p>
        <p>Fecha Reserva</p>
        <p>Hora Reserva</p>
        <p>Estado</p>
      </div>

      {patients.map((item) => {
        return (
          <div
            className="patientCard row"
            onClick={() => getPatient(item.idPaciente)}
            key={item.id}
          >
            <p>{item.idPaciente}</p>
            <p>{`${item.nombrePaciente} ${item.apellidosPaciente}`}</p>
            <p>{item.fechaReservaCita}</p>
            <p>{item.horaReservaCita}</p>
            <p>{item.estadoReservaCita}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PatientList;
