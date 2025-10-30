import React from 'react'
import { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'

const LoginForm = () => {
    const{loginUsername, setLoginUsername, loginPassword , setLoginPassword , SubmitLogin } =useContext(ContextFile)
  return (
    <>
        <div className="container-fluid" id='backimage'>
            <div className="container" id='formcontainer'>
            <div className="row" id='formrow'>
                <div className="col-lg-6" id='formcol'>
                    <h1>Log In</h1>
                        <form onSubmit={SubmitLogin}>
                            <input type="text" name='username' className='form-control my-3' placeholder='Enter username...' value={loginUsername} onChange={e=>setLoginUsername(e.target.value)} />
                            <input type="password" name='password' className='form-control my-3' placeholder='Enter password..' value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/>
                            <input type="submit" className='btn btn-success ms-5' />
                        </form>
                </div>
            </div>
           </div> 
        </div>
    </>

  )
}

export default LoginForm