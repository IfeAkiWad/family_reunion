const reunionReducer = (state = { reunions: [], loading: false }, action) => {
    switch (action.type) {
      case "LOADING_REUNIONS":
        return {
          ...state,
          reunions: [...state.reunions, action.payload],
          loading: true,
        };
      case "ADD_REUNIONS":
        return {
          ...state,
          reunions: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default reunionReducer;