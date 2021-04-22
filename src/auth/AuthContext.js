import React , { useState } from "react";;

const AuthContext = React.createContext(null)



 

const AuthProvider = (props) => {

  

    return ( 
        <AuthContext.Provider value={{role:"adim", uid:null, authenticated:false}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export  {AuthProvider}

export default AuthContext
 