import React, { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'
import { ImageDatas } from '../../assets/asset'


const RegisterForm = () => {

    const { username , setUsername , password , setPassword , email , setEmail , SubmitFun  } = useContext(ContextFile)

  return (
    <>
       <div className="container-fluid" id="formbackimage">
            <div className="container" id="formcontainer">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 col-12" id="formcol">
                  <h1 className="text-center mb-4">Create Account</h1>
                   <form onSubmit={SubmitFun}>
                     <input type="text" name='username' className='form-control my-3 input-field' placeholder='Enter username...'value={username} onChange={e=>setUsername(e.target.value)}/>
                     <input type="password" name='password' className='form-control my-3 input-field' placeholder='Enter password..' value={password} onChange={e=>setPassword(e.target.value)}/>
                     <input type="text" className='form-control my-3 input-field' name='email' placeholder='Enter Email...' value={email} onChange={e=>setEmail(e.target.value)} />
                     <div className="d-flex justify-content-between reglogdiv flex-wrap mt-4">
                  <input type="submit" className="btn btn-success px-4 mb-2" value="Register" />
                  <a className="btn btn-outline-success px-4 mb-2" href="/login">Login</a>
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








