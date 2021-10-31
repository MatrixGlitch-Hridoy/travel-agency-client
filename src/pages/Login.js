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
            <div className="container" style={{height:"50vh"}}>
                <div className="row justify-content-center mx-auto">
                    <div className="col-sm-6 offset-sm-3 " style={{marginTop:"10rem"}}>
                        <button onClick={handleGoogleLogin} className="btn btn-warning fw-bolder px-4 py-3">Login With Google</button>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Login;