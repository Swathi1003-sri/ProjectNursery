import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AddProduct from './Page/AddProduct'
import ProductList from './Page/ProductList'
import UserList from './Page/UserList'
import ContextFile from './Context/ContextFile'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextFile>
          <Routes>
            <Route path='/' element={<AddProduct/>}/>
            <Route path='/product' element={<ProductList/>}/>
            <Route path='/user' element={<UserList/>}/>
          </Routes>
        </ContextFile>
      </BrowserRouter>    
    </>
  )
}

export default App