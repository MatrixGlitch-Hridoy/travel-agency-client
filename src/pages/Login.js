import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {setUser,setIsLoading,signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/";
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(res=>{
            setIsLoading(true);
            setUser(res.user);
            history.push(url);
        }).finally(()=>{
            setIsLoading(false);
        })
    }
    return (
        <>
            <button onClick={handleGoogleLogin}>Login With Google</button>
        </>
    );
};

export default Login;