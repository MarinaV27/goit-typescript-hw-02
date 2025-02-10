import { Audio } from "react-loader-spinner";
import css from "./Leader.module.css";
import React from "react";


const Loader: React.FC = () => {
  
  return (
    <div className={css.loadbox}>
      <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="loading"
        
      />
      <p>Loading data, please wait...</p>
    </div>
  );
}
export default Loader;