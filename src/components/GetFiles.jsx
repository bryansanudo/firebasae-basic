import { collection, getDocs } from "firebase/firestore";
import { db } from "@/configFirebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const GetFiles = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const x = [];
    try {
      const querySnapshot = await getDocs(collection(db, "expedientes"));
      querySnapshot.forEach((doc) => {
        /* console.log(doc.id, "=>", doc.data()); */
        const y = doc.data();
        y["id"] = doc.id;
        x.push(y);
      });
      setData(x);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <button onClick={getData}>traer expedientes</button>
      </div>
      <div className="flex gap-5 flex-col">
        {data.map((file) => (
          <div key={file.id} className="bg-red-500">
            <h1>{file.conceptoContrato}</h1>
            <Link to={`/file/${file.id}`}>
              <button>detalles</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetFiles;
