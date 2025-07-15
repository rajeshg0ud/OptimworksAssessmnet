// components/Doctor/HospitalList.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addAssociation } from "./Store/DoctorSlice";
import TimeSlotForm from "./TimeSlot";

const HospitalList = ({ doctor, hospitals }) => {
  const dispatch = useDispatch();
  const specializations = doctor.specialization.split(",").map((s) => s.trim());

  const associateDoctor = (hospital) => {
    const fee = prompt("Enter consultation fee for " + hospital.name);
    dispatch(
      addAssociation({
        doctorName: doctor.name,
        hospitalId: hospital.id,
        hospitalName: hospital.name,
        department: hospital.department,
        consultationFee: fee,
        availability: [],
      })
    );
  };

  return (
    <div className="HospitalMainContainer">
      <h2>Hospitals Matching specializations</h2>
      {hospitals
        ?.filter((h) => specializations.includes(h.department))
        ?.map((hospital) => (
          <div key={hospital.id} className="HospitalContainer">
            <h4>{hospital.name}</h4>
            <p>{hospital.location}</p>
            <button onClick={() => associateDoctor(hospital)}>Associate</button>
            <TimeSlotForm doctor={doctor} hospitalId={hospital.id} />
          </div>
        ))}
    </div>
  );
};

export default HospitalList;
