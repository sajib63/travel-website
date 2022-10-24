import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Register = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext);

const createUserWithEmail=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    console.log(email, password, name, photoURL);

    createUser(email, password)
    .then(result=>{
        const user=result.user;

        alert('success')
        updateUser(name, photoURL)
        form.reset();
    })
    .catch(error=>{
        console.error(error.message);
    })
}

const updateUser=(name, photoURL)=>{
    const profile={
      displayName:name,
      photoURL:photoURL
    }
    updateUserProfile(profile)
    .then(()=>{

    })
    .catch(error=>{
        console.log(error);
    })
  }


    return (
        <div className="hero min-h-screen bg-base-200 ">
        <form onSubmit={createUserWithEmail} className="hero-content flex-col w-full ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register!</h1>
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" placeholder="photoUrl" name='photoURL' className="input input-bordered" />
              </div>


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
                 <p>If You Have  Already An Account Please <Link to='/login' className='text-blue-600'>Login</Link> </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  hover:text-white bg-orange-500  border-0">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Register;