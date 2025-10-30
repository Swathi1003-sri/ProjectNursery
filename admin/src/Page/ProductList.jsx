import React from 'react'
import ProductTable from '../Component/ProductTable'

const ProductList = () => {
  return (
    <>
        <div className="container-fluid bg-success">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="container">
            <a className="navbar-brand text-light" href="/product">ProductList</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <a className="nav-link text-light " href="/">AddProduct</a>
                <a className="nav-link text-light" href="/user">View User</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <ProductTable/>
    </>
  )
}

export default ProductList