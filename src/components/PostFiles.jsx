import React, { useState } from "react";
import { db } from "@/configFirebase";
import { collection, addDoc } from "firebase/firestore";

const PostFiles = () => {
  const expediente = {
    nombreExpediente: "",
    ejercicioFiscal: "",
    conceptoContrato: "",
    tipoAdjudicacion: "",
    numeroContrato: "",
    proveedorAdjudicado: "",
    numeroPadron: "",
    partidaPresupuestal: "",
    montoContratado: "",
    fechaContrato: "",
    vigenciaContrato: "",
    origenRecurso: "",
    programaPresupuestal: "",
    requisitos: [],
  };

  const [file, setFile] = useState(expediente);

  const handleChange = (e) => {
    setFile({
      ...file,
      [e.target.name]: e.target.value,
    });
  };

  const createFile = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "expedientes"), file);
      console.log("expediente creado en la base de datos");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={createFile} className="flex flex-col gap-4 mt-10 ">
        <input
          type="text"
          name="nombreExpediente"
          placeholder="Nombre del Expediente"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ejercicioFiscal"
          placeholder="Ejercicio Fiscal"
          onChange={handleChange}
        />
        <input
          type="text"
          name="conceptoContrato"
          placeholder="Concepto del contrato"
          onChange={handleChange}
        />
        <input
          type="text"
          name="tipoAdjudicacion"
          placeholder="Tipo de adjudicacion"
          onChange={handleChange}
        />
        <input
          type="text"
          name="requirente"
          placeholder="Requirente"
          onChange={handleChange}
        />
        <input
          type="text"
          name="numeroContrato"
          placeholder="No. de contrato"
          onChange={handleChange}
        />
        <input
          type="text"
          name="proveedorAdjudicado"
          placeholder="proveedor adjudicado"
          onChange={handleChange}
        />
        <input
          type="text"
          name="numeroPadron"
          placeholder="No. de registro de padrón de proveedores"
          onChange={handleChange}
        />
        <input
          type="text"
          name="montoAsignado"
          placeholder="Monto Asignado"
          onChange={handleChange}
        />
        <input
          type="text"
          name="partidaPresupuestal"
          placeholder="Partida Presupuestal"
          onChange={handleChange}
        />
        <input
          type="text"
          name="montoContratado"
          placeholder="Monto Contratado"
          onChange={handleChange}
        />
        <input
          type="text"
          name="montoEjercido"
          placeholder="Monto Ejercido"
          onChange={handleChange}
        />
        <input
          type="text"
          name="fechaContrato"
          placeholder="Fecha del contrato"
          onChange={handleChange}
        />
        <input
          type="text"
          name="vigenciaContrato"
          placeholder="vigencia del contrato"
          onChange={handleChange}
        />
        <input
          type="text"
          name="origenRecurso"
          placeholder="Origen del Recurso"
          onChange={handleChange}
        />
        <input
          type="text"
          name="programaPresupuestal"
          placeholder="Programa Presupuesal"
          onChange={handleChange}
        />
        <button>crear expediente</button>
      </form>
    </>
  );
};

export default PostFiles;
