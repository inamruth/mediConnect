import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  return (
    <>

      <div className="card">
        <div class="shadow p-3 mb-5 bg-body rounded">
          <div className="card-body">
            <label>Email</label>
            <input type="text" ></input>
            <br></br>
            <label>Password</label>
            <input type="password" ></input>
            <br></br>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login