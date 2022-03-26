import { loginFailure,loginStart, loginSuccess } from "./userRedux"
import axios from 'axios'

export const login = async (dispatch,user)=>{
    dispatch(loginStart())
    console.log("this is the user",user)
    try{
        axios.post("http://localhost:3001/api/auth/login",user)
        .then(response=>{
            if (response.data.success === true){
                console.log("hey")
                console.log(response.data)
                dispatch(loginSuccess(response.data))
            }
            else {
                dispatch(loginFailure())
            }
        })
    }catch(err){
        dispatch(loginFailure())        
    }
}