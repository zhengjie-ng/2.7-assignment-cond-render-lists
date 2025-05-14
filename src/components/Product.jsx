import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

import ProductContext from "../context/ProductContext";
import ModeContext from "../context/ModeContext";
import Toggle from "./Toggle";

function Product() {
  const ctx = useContext(ProductContext);
  const modeCtx = useContext(ModeContext);
  // // const [list, setList] = useState([]);
  // // const [sumTotal, setSumTotal] = useState(0);

  /*
    CREATE: Add a new product into the list
  */
  // const handlerAddProduct = () => {
  //   const newItem = {
  //     id: uuid(), // Call uuid() here
  //     name: ctx.name,
  //     quantity: ctx.count,
  //     price: ctx.price,
  //     discount: ctx.discount,
  //     total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
  //   };
  //   const newList = [...list, newItem];
  //   setList(newList);
  //   const sum = sumTotal + newItem.total;
  //   setSumTotal(sum);
  // };

  //---------------------------------------------------------------------------

  // const handlerDeleteProduct = (id) => {
  //   const newList = list.filter((item) => item.id !== id);
  //   setList(newList);
  //   const sum = newList.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.total,
  //     0
  //   );
  //   setSumTotal(sum);
  // };

  // const handlerEditItem = (id) => {
  //   console.log("edit here");
  // };

  return (
    <div className={`${styles.container} ${modeCtx.isDark && styles.dark}`}>
      <Toggle />
      <Card />
      <ViewList />
    </div>
  );
}

export default Product;
