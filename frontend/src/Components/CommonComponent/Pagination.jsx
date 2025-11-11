import React from 'react'
import { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'

const Pagination = () => {
    const {handleNext,handlePrev,page,totalPages} = useContext(ContextFile) 
  return (
    <>
    {/* <div className="d-flex justify-content-center mt-4">
        <button onClick={handlePrev} disabled={page === 1} className="btn btn-outline-primary me-2">
          ⬅️ Prev
        </button>
        <button onClick={handleNext} disabled={page === totalPages} className="btn btn-outline-primary">
          Next ➡️
        </button>
      </div> */}
    
    </>
  )
}

export default Pagination