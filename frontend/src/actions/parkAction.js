export const fetchParks = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_PARKS" });
      fetch("http://localhost:3000/parks")
        .then(response => response.json())
        .then((data) => {
          dispatch({ type: "ADD_PARKS", parks: data });
        });
    };
  };