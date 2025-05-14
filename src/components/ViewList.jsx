import styles from "./ViewList.module.css";

import { useContext } from "react";
import ModeContext from "../context/ModeContext";
import ProductContext from "../context/ProductContext";

import EditForm from "./EditForm";

function ViewList() {
  const modeCtx = useContext(ModeContext);
  const prodCtx = useContext(ProductContext);

  return (
    <div>
      <table className={`${styles.table} ${!modeCtx.isLight && styles.dark}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Disc %</th>
            <th>Total $</th>
            <th>Edit</th>
            <th>Delete</th>
            {/* Add Delete column header here */}
          </tr>
        </thead>
        <tbody>
          {prodCtx.list.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>{item.total.toFixed(2)}</td>
              {/* Add Delete column data cell here */}
              <td onClick={() => prodCtx.handlerEditProduct(item.id)}>
                {item.itemEditIcon}
              </td>
              <td onClick={() => prodCtx.handlerDeleteProduct(item.id)}>❌</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.containerSum}>
        Total sum:{" "}
        <span className={styles.sum}>{prodCtx.sumTotal.toFixed(2)}</span>
        <br></br>
        {prodCtx.sumTotal !== prodCtx.originalSumTotal && (
          <span className={styles.originalSumTotal}>
            {Number(prodCtx.originalSumTotal).toFixed(2)}
          </span>
        )}
        {prodCtx.originalSumTotal - prodCtx.sumTotal > 0 && (
          <p className={styles.deals}>
            Savings from Deals: $
            {Number(prodCtx.originalSumTotal - prodCtx.sumTotal).toFixed(2)}
          </p>
        )}
      </div>
      {prodCtx.editItem && <EditForm />}
    </div>
  );
}
export default ViewList;
