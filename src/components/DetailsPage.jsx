import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import Requiriments from "@/components/Requiriments";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getData = async () => {
    const docRef = doc(db, "expedientes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDetails(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>{details.montoEjercido}</div>
      <div>{details.partidaPresupuestal}</div>
      <Requiriments id={id} />
    </>
  );
};

export default DetailsPage;
