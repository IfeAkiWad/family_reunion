const parkReducer = (state = { parks: [], loading: false }, action) => {
    switch (action.type) {
      case "LOADING_PARKS":
        return {
          ...state,
          parks: [...state.parks, action.payload],
          loading: true,
        };
      case "ADD_PARKS":
        return {
          ...state,
          parks: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default parkReducer;