import styles from "./EditForm.module.css";

import { useContext } from "react";
import ModeContext from "../context/ModeContext";
import ProductContext from "../context/ProductContext";
import Button from "./Button";

function EditForm() {
  const modeCtx = useContext(ModeContext);
  const prodCtx = useContext(ProductContext);
  return (
    <div>
      <form onSubmit={prodCtx.handlerSubmit}>
        <table className={`${styles.table} ${!modeCtx.isLight && styles.dark}`}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Disc %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  value={prodCtx.editItemName}
                  onChange={prodCtx.handlerChangeEditName}
                ></input>
              </td>
              <td>
                <input
                  value={prodCtx.editItemQuantity}
                  onChange={prodCtx.handlerChangeEditQuantity}
                ></input>
              </td>
              <td>
                <input
                  value={prodCtx.editItemPrice}
                  onChange={prodCtx.handlerChangeEditPrice}
                ></input>
              </td>
              <td>
                <input
                  value={prodCtx.editItemDiscount}
                  onChange={prodCtx.handlerChangeEditDiscount}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <Button label="Submit" onClick={prodCtx.handlerSubmit} />
        <Button label="Cancel" onClick={prodCtx.handlerCancel} />
      </form>
    </div>
  );
}

export default EditForm;
