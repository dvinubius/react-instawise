import React, { useState } from "react";
import Title from "./Title";
import UploadForm from "../upload/components/UploadForm";
import Gallery from "../gallery/components/Gallery";
import Modal from "../gallery/components/Modal";
import "./Home.css";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Title></Title>
      <UploadForm></UploadForm>
      <Gallery setSelectedImg={setSelectedImg}></Gallery>
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};
export default Home;
