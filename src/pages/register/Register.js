import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Register.css';

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8085/users/addUser', user)
      .then((response) => {
        console.log(response.data);
        // alert("LoginId created");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Great!',
          text: 'You have been registered successfully!',
          showConfirmButton: true,
          timer: 10000
        })
        // Handle success response here
        navigate('/');

      })
      .catch((error) => {
        console.error(error.response.data);
        // Handle error here
        // alert("Login ID is already taken");
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops! Something went wrong!',
          text: 'This email already registered!',
          showConfirmButton: true,
          timer: 10000
        })
      });
  };
  return (
    <>
    <div class="header">
        <h1 class="display-5">Hurry! Register now. Seats filling up fast!</h1>
        </div>
    <div>
    <div className='register-container' style={{marginLeft:400,marginTop:30}}>
      <div className='register-form'>
      <h5 className='text-center' style={{ marginButton: "40px" }}>Registration Form</h5>
      <form className="user-registration-form" onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-sm'>
            <div className="form-group">
              {/* <label htmlFor="firstName" style={{ fontWeight: "normal" }}>First Name</label> */}
              <input
                    type="text"
                    value={user.username}
                    name="username"
                    id="username"
                    placeholder="Enter Your Username"
                    required 
                    onChange={handleChange}
                  />
            </div>
          </div>
          <div className='col-sm'>
            <div className="form-group">
              {/* <label htmlFor="LastName" style={{ fontWeight: "normal" }}>Last Name</label> */}
              <input
                    type="email"
                    value={user.email}
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter Your Email"
                    required 
                    onChange={handleChange}
                  />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <div className="form-group">
              {/* <label htmlFor="email" style={{ fontWeight: "normal" }}>Email</label> */}
              <input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Enter Your Password"
                    value={user.password}
                    onChange={handleChange} required 
                  />
            </div>
          </div>
        </div>
        <div className="form-group">
          {/* <label htmlFor="password" style={{ fontWeight: "normal" }}>Password</label> */}
          <input
                    type="tel"
                    value={user.phoneNumber}
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Your Contact Number"
                    pattern="[0-9]{10}" required 
                    onChange={handleChange}
                  />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <label htmlFor="login">Already have an account? <Link to="/">Login here</Link></label>
      </form>
      </div>
      </div>
      </div>
    </>
  );
}

export default Register;