import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setFile(null);
      setError(null);
      return;
    }
    const allowed = ["image/png", "image/jpeg"].includes(file.type);
    if (!allowed) {
      setFile(null);
      setError("Please select an image.");
      return;
    }

    setError(null);
    setFile(file);
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <div className="plus">+</div>
      </label>
      <div className="output">
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
