import React, { useContext } from 'react'
import { Mycontext } from '../Context/ContextFile'

const UserTable = () => {

    const { userData , RemoveUser} = useContext(Mycontext)

  return (
    <>
        <div className="container">
            <table className='table table-responsive table-primary mt-4 text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.length === 0
                        ?
                        <tr>
                            <td colSpan={4} className='text-danger'>No User Found !</td>
                        </tr>
                        :
                        userData.map((value,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{value.username}</td>
                                    <td>{value.password}</td>
                                    <td>{value.email}</td>
                                    <td><span className='fs-4 text-danger' onClick={()=>RemoveUser(value._id)}>&times;</span></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default UserTable