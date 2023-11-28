import { useState, useEffect } from "react";
import {
  appStorage,
  appFirestore,
  genTimestamp,
} from "../../firebase/init-firebase";

const useUpload = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = appStorage.ref(file.name);
    const collectionRef = appFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        collectionRef.add({
          url,
          createdAt: genTimestamp(),
        });
      }
    );
    return () => {
      // cleanup
    };
  }, [file]);

  return { progress, url, error };
};

export default useUpload;
