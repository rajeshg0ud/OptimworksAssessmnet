import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RegisterDoctor from "./RegisterDoctor";
import HospitalList from "./HospitalList";

const DoctorMain = () => {
  const [currDoctor, setCurrDoctor] = useState(null);
  const { Hospitals } = useSelector((store) => store?.Slice);
  useEffect(() => {
    const doc = JSON.parse(localStorage.getItem("currDoctor"));
    if (doc) setCurrDoctor(doc);
  }, []);

  return (
    <div className="DoctorMain">
      {!currDoctor ? (
        <RegisterDoctor onRegister={setCurrDoctor} />
      ) : (
        <HospitalList doctor={currDoctor} hospitals={Hospitals} />
      )}
    </div>
  );
};

export default DoctorMain;
