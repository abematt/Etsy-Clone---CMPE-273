import { loginFailure,loginStart, loginSuccess } from "./userRedux"
import axios from 'axios'

export const login = async (dispatch,user)=>{
    dispatch(loginStart())
    try{
        axios.post("http://localhost:3001/api/auth/login",user)
        .then(response=>{
            if (response.data.success === true){
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