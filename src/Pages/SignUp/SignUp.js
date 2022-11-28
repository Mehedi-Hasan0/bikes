import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import img from '../../assets/loginSvg/Sign up-cuate.svg';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();

    const handleSignup = (data) => {
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch(' https://dream-bikes-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log('user', user);
                navigate(from, { replace: true });
            })
            .catch(err => console.log(err))
    }
    return (
        <div className=' flex md:flex-row flex-col justify-center items-center font-[poppins] my-9 mx-3'>
            <div className='w-96 md:mr-14'>
                <img className='inline' src={img} alt="" />
            </div>
            <div className=' p-8 md:shadow-lg shadow-none w-96 rounded-xl mt-8 sm:mt-0'>
                <h3 className=' text-xl text-black text-center'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Name</span></label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            className='input input-bordered mb-2' />
                        {errors.name && <p className=' text-red-400 text-xs'>{errors.name?.message}</p>}
                    </div>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Email</span></label>
                        <input
                            {...register('email', { required: ' Email is required' })}
                            type="email"
                            className='input input-bordered mb-2' />
                        {errors.email && <p className=' text-red-400 text-xs'>{errors.email?.message}</p>}
                    </div>
                    <div className=' form-control w-full max-w-xs text-black'>
                        <label className='label'><span className=' label-text text-neutral'>Password</span></label>
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                pattern: { value: /(?=.*[A-Z])(?=.*[a-z])/, message: ' Password must have upper and lower case characters' },
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            type="password"
                            className='input input-bordered' />
                        {errors.password && <p className=' text-red-400 text-xs my-2'>{errors.password?.message}</p>}
                        {signUpError && <p className=' text-red-400 text-xs my-2'>{signUpError.slice(22, -2)}</p>}
                    </div>
                    <div className=' form-control w-full max-w-xs text-black mt-3'>
                        <label className='label'><span className=' label-text text-neutral'>Choose account type</span></label>
                        <select className="select select-bordered w-full max-w-xs"
                            {...register('role', { required: ' Choose at least one type' })}
                        >
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                        {errors.role && <p className=' text-red-400 text-xs'>{errors.role?.message}</p>}
                    </div>
                    <input type='submit' className='btn btn-neutral w-full mt-4' value='sign up' />
                </form>
                <p className=' text-xs text-center mt-3 text-neutral'>Already have an account? <Link className=' text-primary text-sm hover:text-secondary hover:font-medium' to='/login'>Please Login</Link></p>
                <div className=' divider'>OR</div>
                <button onClick={handleGoogleSignIn} className=' btn btn-neutral btn-outline text-neutral w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;