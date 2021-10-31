import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import initializeAuthentication from '../Firebase/firebase.init';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

initializeAuthentication();
const Login = () => {
    const { handleGoogleLogin, setUser, setError, setIsLoading } = useAuth();

    // redirect process setting
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    // login with google provider 
    const handleLogInWithGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // handle login using login form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    // console.log(watch("email"));

    return (
        <div>
            <div className="mx-auto form-container my-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control my-3" type="email" {...register("email")} placeholder="Email" />
                    <input className="form-control my-3" type="password" {...register("password", { required: true })} placeholder="password" />
                    {errors.password && <span className="text-warning my-1">This field is required</span>}
                    <button className="btn btn-primary w-100 my-2" type="submit">Login</button>
                </form>
                <div>
                    <p className="text-white">Create an account <Link to="/login" className="text-decoration-none text-warning">Register</Link></p>
                    <hr className="border border-1 w-25 mx-auto" />
                    <div className="d-flex justify-content-around align-items-center mt-4">
                        <button className="login-with-btn" onClick={handleLogInWithGoogle}><span><i className="fab fa-google text-primary me-2"></i></span> Google</button>
                        <button className="login-with-btn" ><span><i className="fab fa-google text-primary me-2"></i></span> Git Hub</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;