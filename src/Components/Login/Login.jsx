import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import image from './img/95530-password.gif'

const Login = () => {
const {loginUser}=useContext(AuthContext);


  const loginUserWithEmail=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
  
    loginUser(email, password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      alert('success')
      form.reset();
    })
    .catch(error=>{
      console.error(error.message);
    })
    
  }

 


    return (
      <div className="hero min-h-screen bg-base-200 ">
      <form onSubmit={loginUserWithEmail} className="hero-content flex-col w-full  lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-4">Login!</h1>
          <img src={image} alt="" className='h-3/4'/>
    
        </div>
        <div className="card flex-shrink-0 w-full h-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-full">
        
            


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" />
              <label className="label">
               <p>If You Don't Have Any Account Please <Link to='/register' className='text-blue-600'>Register</Link> </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn border-0  hover:text-white bg-orange-500  ">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
};

export default Login;