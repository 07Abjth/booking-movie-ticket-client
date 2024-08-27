import { useEffect } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";


export const UserAuth = ({children}) => {
    
    const navigate = useNavigate()


    const checkUser= async ()=>{

        try {
          
        const response = await axiosInstance({
          url: "/user/check-user/",
          method: "GET",
          withCredentials:true
        })
       
        console.log(response, '====response');
    }catch (error){
            console.log(error);
            
        }
        
        };

useEffect(()=>{
    checkUser();

}, []);
return children;
};