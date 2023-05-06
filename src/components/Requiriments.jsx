import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/configFirebase";

const Requiriments = ({ id }) => {
  const [requiriment, setRequiriment] = useState({
    title: "",
    description: "",
  });
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setRequiriment({ ...requiriment, [e.target.name]: e.target.value });
  };

  const addDb = async (e) => {
    e.preventDefault();
    const requisitos = data.requisitos;
    /* console.log(requisitos); */
    requisitos.push(requiriment);

    /* console.log(data); */

    await setDoc(doc(db, "expedientes", id), data);
  };

  const getData = async () => {
    const docRef = doc(db, "expedientes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="titulo"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="requerimiento"
          name="description"
          onChange={handleChange}
        />
        <button onClick={addDb}>agregar requirimiento</button>
      </form>
      <div>
        {data.requisitos?.map((r) => (
          <div>{r.title}</div>
        ))}
      </div>
    </>
  );
};

export default Requiriments;
