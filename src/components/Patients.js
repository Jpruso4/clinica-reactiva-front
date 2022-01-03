import { useEffect } from "react";
import "../styles/PatientCard.css";

import { useSelector, useDispatch } from "react-redux";
import { getPatients } from "../actions/getPatients";
import { getPatientDetail } from "../actions/patientDetail";

import PatientList from "./PatientList";
import PatientDetail from "./PatientDetail";

export default function Counter() {
  const dispatch = useDispatch();
  const patientList = useSelector((store) => store.patientList);
  const patientDetail = useSelector((store) => store.patientDetail);

  const getPatient = (id) => {
    dispatch(getPatientDetail(id));
  };

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  return (
    <div className="mainContainer">
      <PatientList patients={patientList} getPatient={getPatient} />
      <PatientDetail patientDetail={patientDetail} />
    </div>
  );
}
