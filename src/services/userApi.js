import axios from 'axios';

export const userLogin = async (data) => {
  try {
    const response = await axios({
      url: "http://localhost:4000/api/v1/user/login",
      method: "POST",
      data,
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    // Handle error response to bubble it up
    if (error.response) {
      // Return specific error response from the server
      return { error: error.response.data };
    } else {
      // General error message
      return { error: 'An error occurred during login' };
    }
  }
};


export const userCheck= async ()=>{

// try {
  
// const response = await axiosInstance({
//   url: "/user/user-check/",
//   method: "GET",
// })
// return response?.data;

// } catch (error) {
//   console.log(error);
  
// }

}