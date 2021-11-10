export const fetchPeople = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_PEOPLE" });
      fetch("http://localhost:3000/people")
        .then(response => response.json())
        .then((data) => {
          dispatch({ type: "ADD_PEOPLE", people: data });
        });
    };
  };