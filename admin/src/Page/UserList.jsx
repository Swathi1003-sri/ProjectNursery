import React from 'react'
import UserTable from '../Component/UserTable'

const UserList = () => {
  return (
    <>
        <div className="container-fluid bg-success">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="container">
            <a className="navbar-brand text-light" href="#">UserList</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link text-light " href="/">AddProduct</a>
                <a className="nav-link text-light" href="/product">View Product</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <UserTable/>
    </>
  )
}

export default UserList 