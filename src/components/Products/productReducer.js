function reducerFunction(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.products };
    case 'ADD_NEW_PRODUCT':
      return { ...state, products: [action.newProduct, ...state.products] };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.productId
        ),
      };
    case 'OPEN_MODAL':
      return { ...state, isShowModal: true };
    case 'CLOSE_MODAL':
      return { ...state, isShowModal: false };
    case 'CLOSE_LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

const initialState = {
  products: [],
  isShowModal: false,
  isLoading: true,
};

export { reducerFunction, initialState };
