import axios from 'axios'

// export const fetchReunions = () => {
//     return (dispatch) => {
//       dispatch({ type: "LOADING_REUNIONS" });
//       fetch("http://localhost:3000/reunions")
//         .then(response => response.json())
//         .then((data) => {
//           dispatch({ type: "ADD_REUNIONS", reunions: data });
//         });
//     };
//   };

  
// attempting with axios
    export const fetchReunions = () => {
        return (dispatch) => {
            dispatch({ type: "LOADING_REUNIONS" });
            return axios.get('http://localhost:3000/reunions')
            .then(data => {
                dispatch({ type: "ADD_REUNIONS", reunions: data });
            });
        }
    }