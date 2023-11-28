import { useState, useEffect } from "react";
import { appFirestore } from "../../firebase/init-firebase";

const useImages = (collectionName) => {
  const [docs, setdocs] = useState([]);

  useEffect(() => {
    const unsub = appFirestore
      .collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];

        snap.forEach((doc) => {
          documents.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setdocs(documents);
      });
    return unsub;
  }, [collectionName]);

  return { docs };
};

export default useImages;
