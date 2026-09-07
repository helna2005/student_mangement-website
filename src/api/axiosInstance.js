import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000
})

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log('API call success..Response recieved!!');
        return response
    },
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log('unauthorised access..');
            }else if(status==404){
                console.log('api not found!!');
            }else if(status==500){
                console.log('server error!!!');
            }else if(error.requset){
                console.log('No response from server!!!');
            }else{
                console.log('error:'+error.message);
            }
            return Promise.reject(error)
        }
    }
)
export default axiosInstance