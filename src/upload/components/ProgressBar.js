import React, { useEffect } from "react";
import useUpload from "../hooks/UseUpload";
import { motion } from "framer-motion";
import "./ProgressBar.css";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useUpload(file);

  useEffect(() => {
    url && setFile(null);
  }, [url, setFile]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      className="progress-bar"
    ></motion.div>
  );
};

export default ProgressBar;
