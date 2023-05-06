import { collection, getDocs } from "firebase/firestore";
import { db } from "@/configFirebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetFiles = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const x = [];
    try {
      const querySnapshot = await getDocs(collection(db, "expedientes"));
      querySnapshot.forEach((doc) => {
        const y = doc.data();
        y["id"] = doc.id;
        x.push(y);
      });
      setData(x);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
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
