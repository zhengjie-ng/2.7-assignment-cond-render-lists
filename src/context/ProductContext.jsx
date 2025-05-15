import { createContext, useReducer } from "react";
import { defaultProduct, productReducer } from "../reducers/ProductReducer";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };

  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };

  const handlerChangeName = (value) => {
    dispatch({ type: "SET_NAME", name: value });
  };

  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRICE", price: value });
  };

  const handlerAddProduct = () => {
    dispatch({ type: "ADD_PRODUCT" });
  };

  const handlerDeleteProduct = (id) => {
    if (state.isEditing === false) {
      dispatch({ type: "DELETE_PRODUCT", id: id });
    } else {
      alert("No Deleting is Allowed in Editing Mode");
    }
  };
  const handlerEditProduct = (id) => {
    dispatch({ type: "EDIT_PRODUCT", id: id });
  };

  const handlerChangeEditName = (e) => {
    // console.log(e.target.value);
    dispatch({ type: "SET_EDIT_NAME", name: e.target.value });
  };

  const handlerChangeEditQuantity = (e) => {
    dispatch({ type: "SET_EDIT_QUANTITY", quantity: e.target.value });
  };
  const handlerChangeEditPrice = (e) => {
    dispatch({ type: "SET_EDIT_PRICE", price: e.target.value });
  };
  const handlerChangeEditDiscount = (e) => {
    dispatch({ type: "SET_EDIT_DISCOUNT", discount: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  const handlerCancel = (e) => {
    e.preventDefault();
    dispatch({ type: "CANCEL_FORM" });
  };

  const handlerItemCancel = () => {
    dispatch({ type: "CANCEL_FORM" });
  };
  const context = {
    count: state.count,
    discount: state.discount,
    name: state.name,
    price: state.price,
    list: state.list,
    sumTotal: state.sumTotal,
    originalSumTotal: state.originalSumTotal,
    editItem: state.editItem,
    editItemName: state.editItemName,
    editItemQuantity: state.editItemQuantity,
    editItemPrice: state.editItemPrice,
    editItemDiscount: state.editItemDiscount,
    isEditing: state.isEditing,
    itemEditIcon: state.itemEditIcon,
    handlerPlus,
    handlerMinus,
    handlerChangeName,
    handlerChangePrice,
    handlerAddProduct,
    handlerDeleteProduct,
    handlerEditProduct,
    handlerChangeEditName,
    handlerChangeEditQuantity,
    handlerChangeEditPrice,
    handlerChangeEditDiscount,
    handlerSubmit,
    handlerCancel,
    handlerItemCancel,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;
