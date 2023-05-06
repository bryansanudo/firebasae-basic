import React from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";

const DetailsPage = () => {
  const { id } = useParams();

  const getData = async () => {
    const docRef = doc(db, "expedientes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <>
      <button onClick={getData}>detalles</button>
      <div></div>
    </>
  );
};

export default DetailsPage;
