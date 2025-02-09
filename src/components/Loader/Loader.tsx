import { Audio } from "react-loader-spinner";
import css from "./Leader.module.css";

export default function Loader() {
  return (
    <div className={css.loadbox}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <p>Loading data, please wait...</p>
    </div>
  );
}
