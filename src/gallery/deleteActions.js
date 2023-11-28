import { appStorage, appFirestore } from "../firebase/init-firebase";

const deleteImage = async (doc) => {
  const fileBucketRef = appStorage.refFromURL(doc.url);
  fileBucketRef.delete();
  appFirestore.collection("images").doc(doc.id).delete();
};

export { deleteImage };
