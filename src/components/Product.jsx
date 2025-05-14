import { useContext } from "react";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

import ModeContext from "../context/ModeContext";
import Toggle from "./Toggle";

function Product() {
  const modeCtx = useContext(ModeContext);

  return (
    <div className={`${styles.container} ${modeCtx.isDark && styles.dark}`}>
      <Toggle />
      <Card />
      <ViewList />
    </div>
  );
}

export default Product;
