import React, { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'
import { ImageDatas } from '../../assets/asset'


const RegisterForm = () => {

    const { LogOutFun, username , setUsername , password , setPassword , email , setEmail , SubmitFun  } = useContext(ContextFile)

  return (
    <>
       <div className="conatiner-fluid" id='backimage'>
        <div className="container" id='formcontainer' >
            <div className="row" id='formrow'>
                <div className="col-lg-6 col-md-6 col-sm-12" id='formcol'>
                  <h1>Create Account</h1>
                  <form onSubmit={SubmitFun}>
                    <input type="text" name='username' className='form-control my-3' placeholder='Enter username...' value={username} onChange={e=>setUsername(e.target.value)}/>
                    <input type="password" name='password' className='form-control my-3' placeholder='Enter password..' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <input type="text" className='form-control my-3' name='email' placeholder='Enter Email...' value={email} onChange={e=>setEmail(e.target.value)} />
                    <div className="d-flex justify-content-between">
                      <input type="submit" className='btn btn-success' />
                      <a className='btn btn-success ms-5' href="/login">LOGIN</a>
                    </div>
                  </form>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default RegisterForm