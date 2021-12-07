import axios from 'axios';
import {createContext, useState} from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        password: "",
        role: "",
        google: false
    })

    const loginUser = async (obj) => {
        const response = await axios.post('http://localhost:5000/api/auth/login', obj);
        console.log(response)
    }

    const googleLogin = async (obj) => {
        const response = await axios.post('http://localhost:5000/api/auth/googleLogin', obj);
        console.log(response)
        if (response.data) {
            localStorage.setItem("jwtposts", JSON.stringify(response.data));
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loginUser,
                googleLogin
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;