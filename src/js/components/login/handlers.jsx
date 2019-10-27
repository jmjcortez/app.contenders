import axios from "axios";

import { userAuthenticateAction, userAuthenticateSuccessAction } from "../../actions/user-actions";

const API = "http://localhost:8000";

export const handleAuthenticate = async (values, dispatch) => {
    dispatch(userAuthenticateAction());

    try {
        const response = await axios({
            method: "POST",
            url: `${API}/auth/token/`,
            responseType: "json",
            data: values
        });

        dispatch(userAuthenticateSuccessAction(response.data));
        
    } catch (error) {
        console.log("error");
    }

    // dispatch success
}


// export async function get(url) {
//     try {
//       const response = await axios({
//         method: "GET",
//         url: `${API}${url}`,
//         responseType: "json",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
  
//       return camelize(response.data);
//     } catch (error) {
//       console.error("Error:", error.response);
//       return error;
//     }
//   }