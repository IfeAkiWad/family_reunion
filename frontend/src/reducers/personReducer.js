const personReducer = (state = { people: [], loading: false }, action) => {
    switch (action.type) {
      case "LOADING_PEOPLE":
        return {
          ...state,
          people: [...state.people],
          loading: true,
        };
      case "ADD_PEOPLE":
        return {
          ...state,
          people: action.people,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default personReducer;