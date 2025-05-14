import { v4 as uuid } from "uuid";

export const defaultProduct = {
  count: 1,
  discount: 0,
  name: "Banana",
  price: 2.99,
  list: [],
  sumTotal: 0,
  originalSumTotal: 0,
  prevEditItem: "",
  editItem: "",
  editItemName: "",
  editItemQuantity: 0,
  editItemPrice: 0,
  editItemDiscount: 0,
  itemEditIcon: "✏️",
  isEditing: false,
};

export function productReducer(state, action) {
  switch (action.type) {
    case "PLUS_COUNT": {
      let newState = { ...state };
      newState.count = state.count + 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      return newState;
    }
    case "MINUS_COUNT": {
      let newState = { ...state };
      newState.count = state.count - 1;
      if (newState.count < 5) {
        newState.discount = 0;
      }
      if (newState.count < 0) newState.count = 0;
      return newState;
    }
    case "SET_NAME": {
      return { ...state, name: action.name };
    }
    case "SET_PRICE": {
      return { ...state, price: action.price };
    }
    case "ADD_PRODUCT": {
      const newItem = {
        id: uuid(),
        name: state.name,
        quantity: state.count,
        price: state.price,
        discount: state.discount,
        total: (state.count * state.price * (100 - state.discount)) / 100,
        originalTotal: state.count * state.price,
        itemEditIcon: state.itemEditIcon,
      };

      return {
        ...state,
        list: [...state.list, newItem],
        sumTotal: state.sumTotal + newItem.total,
        originalSumTotal: state.originalSumTotal + newItem.originalTotal,
      };
    }
    case "DELETE_PRODUCT": {
      const newList = state.list.filter((item) => item.id !== action.id);
      const sum = newList.reduce(
        (accumulator, currentValue) => accumulator + currentValue.total,
        0
      );
      const originalSum = newList.reduce(
        (acc, product) => acc + product.originalTotal,
        0
      );

      return {
        ...state,
        list: newList,
        sumTotal: sum,
        originalSumTotal: originalSum,
      };
    }
    case "EDIT_PRODUCT": {
      if (state.prevEditItem) {
        state.prevEditItem.itemEditIcon = "✏️";
      }
      const newEditItem = state.list.find((item) => item.id === action.id);
      newEditItem.itemEditIcon = "⚙️";
      return {
        ...state,
        editId: action.id,
        prevEditItem: newEditItem,
        editItem: newEditItem,
        editItemName: newEditItem.name,
        editItemQuantity: newEditItem.quantity,
        editItemPrice: newEditItem.price,
        editItemDiscount: newEditItem.discount,
        isEditing: true,
      };
    }
    case "SET_EDIT_NAME": {
      return { ...state, editItemName: action.name };
    }
    case "SET_EDIT_QUANTITY": {
      return { ...state, editItemQuantity: action.quantity };
    }
    case "SET_EDIT_PRICE": {
      return { ...state, editItemPrice: action.price };
    }
    case "SET_EDIT_DISCOUNT": {
      return { ...state, editItemDiscount: action.discount };
    }

    case "SUBMIT_FORM": {
      state.editItem.name = state.editItemName;
      state.editItem.quantity = state.editItemQuantity;
      state.editItem.price = state.editItemPrice;
      state.editItem.discount = state.editItemDiscount;
      state.editItem.total =
        (state.editItemQuantity *
          state.editItemPrice *
          (100 - state.editItemDiscount)) /
        100;

      state.editItem.originalTotal =
        state.editItemQuantity * state.editItemPrice;

      const sum = state.list.reduce((acc, product) => acc + product.total, 0);
      const originalSum = state.list.reduce(
        (acc, product) => acc + product.originalTotal,
        0
      );
      return { ...state, sumTotal: sum, originalSumTotal: originalSum };
    }
    case "CANCEL_FORM": {
      state.prevEditItem.itemEditIcon = "✏️";

      return {
        ...state,
        editItem: "",
        editItemName: "",
        editItemQuantity: 0,
        editItemPrice: 0,
        editItemDiscount: 0,
        isEditing: false,
      };
    }
    default:
      throw Error("productReducer: unknown action:" + action.type);
  }
}
