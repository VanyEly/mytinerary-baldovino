import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from "sweetalert2";

export const cargarUsuario = createAction( 'cargar_usuario', (user) => {
    return {
        payload : user
    }
} )

export const signUp = createAsyncThunk( "create_user", async ( body ) => {
    try {
        const response = await axios.post( 'http://localhost:3000/api/user/register', body )
        response.data.token && localStorage.setItem( 'token', response.data.token )
        return response.data
    } catch (error) {
        console.log( error )
    }
} )

export const signIn = createAsyncThunk( "logear", async ( body ) => {
    try {
        const response = await axios.post( 'http://localhost:3000/api/user/login', body )
        localStorage.setItem( 'token', response.data.token )
    return response.data
       
    } catch (error) {
       // console.log( error )
       Swal.fire({
        icon: 'error',
        title: 'Oops..!',
        text:  error.message,
       }).then(()=>{window.location.replace("/")})
    }
     
} )


export const signInWithToken = createAsyncThunk( "logear_token", async (  ) => {
    try {
        const token = localStorage.getItem( 'token' )
        const response = await axios.post( 'http://localhost:3000/api/user/authenticated',{}, {
            headers: {
                Authorization : "Bearer " + token
              }
        })
        return {
            user : response.data?.user,
            token : token
        }
    } catch (error) {
        console.log( error )
    }
} )


export const logout = createAction( "reset", () => {
        localStorage.removeItem('token')
        return {
            payload : null
        }
} )


// export const obtenerTodosLosUsuarios = ()=>{
//     return async(dispatch,getState) =>{
//         try{
//             const usuarios = await axios.get('http://localhost:4000/api/usuarios')
//             dispatch({type:'usuarios', payload: usuarios.data.response})
//         }catch(error){
//             console.error(error);
//         }
//     }
// }













// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// const sign_in = createAsyncThunk("sing_in",async (payload) => {
//     try {
//         let{email, password} = payload

//         const user = await axios
//         .post("https://localhost:3000/api/user/login",{
//             email: email,
//             password: password,
//         }).then((response) => {
//              localStorage.setItem("token", response.data.token);
//              console.log("Successfully logged in");
//              return response.data.user
//         })
//     .catch ((error) => 
//     error.response.data.message.forEach((message) =>console.log(message))
//     );
//     return {
//         user: user,
//     };
//     }catch(e){
//         console.log(e.message);
//     }

// });

// const authenticate = createAsyncThunk("Authenticate",async ()=>{
//     try {
//         let token = localStorage.getItem("token");

//       let user= await axios.post("http://localhost:3000/api/user/authenticated",null,{
//         headers:{
//             'Authorization': 'Bearer ' + token
//         }
//        })
//        .then((response) => {
//         console.log("authenticated successfully");
//         localStorage.setItem("token", response.data.token)
//         return response.data.user
//        })

//        return {
//         user:user
//        }
//     } catch (error) {
//         console.log(error.message);
//     }
// })

// const sign_out = createAsyncThunk("sign_out",async()=>{
//     try {
//         axios.post("http://localhost:3000/api/users/logout")
//         .then((response)=> {
//             localStorage.removeItem("token")
//         console.log(response)})

//     } catch (error) {
//         console.log(error.message);
//     }
// })

// const userActions = {sign_in};

// export default userActions;