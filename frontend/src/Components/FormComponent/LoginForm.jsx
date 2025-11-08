import React from 'react'
import { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'

const LoginForm = () => {
    const{loginUsername, setLoginUsername, loginPassword , setLoginPassword , SubmitLogin } = useContext(ContextFile)
  return (
    <>
        <div className="container-fluid" id="formbackimage">
            <div className="container" id="formcontainer">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 col-12" id="formcol">
                  <h1 className="text-center mb-4">LogIn</h1>
                        <form onSubmit={SubmitLogin}>
                            <input type="text" name='username' className='form-control my-3 input-field' placeholder='Enter username...' value={loginUsername} onChange={e=>setLoginUsername(e.target.value)} />
                            <input type="password" name='password' className='form-control my-3 input-field' placeholder='Enter password..' value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/>
                            <div className="d-flex justify-content-between reglogdiv flex-wrap mt-4">
                  <input type="submit" className="btn btn-success px-4 mb-2" value="LogIn" />
                  <a className="btn btn-outline-success px-4 mb-2" href="/register">Register</a>
                </div>
                        </form>
                </div>
            </div>
           </div> 
        </div>
    </>

  )
}

export default LoginForm