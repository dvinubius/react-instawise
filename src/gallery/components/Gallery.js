import React from "react";
import useImages from "../hooks/UseImages";
import { deleteImage } from "../deleteActions";
import { motion } from "framer-motion";
import "./Gallery.css";

const Gallery = ({ setSelectedImg }) => {
  const { docs } = useImages("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            className="card"
            key={doc.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="shadow-wrap">
              <div className="img-wrap" onClick={() => setSelectedImg(doc.url)}>
                <img src={doc.url} alt="in gallery" />
              </div>
            </div>

            <div className="deleter" onClick={() => deleteImage(doc)}>
              <div className="diag diag1"></div>
              <div className="diag diag2"></div>
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default Gallery;
