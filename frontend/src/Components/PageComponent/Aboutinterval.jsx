import React, { useContext } from 'react'
import { ContextFile } from '../../Context/ContextProvider'

const Aboutinterval = () => {
    const {serviceCount,truckCount,clientCount,expertsCount} = useContext(ContextFile)
  return (
    <>
    <div className="container-fluid" id='abtfluid'>
        <div className="row" id='abtrow'>
            <div className="col-lg-3 col-md-12 col-sm-12" id='abtcol'>
                <div className="card border-0" id='abtcard'>
                    <div className="card-body" id='abtbody'>
                        <div className="abticondiv">
                            <h1><i className="fa-solid fa-users"></i></h1>
                            <h4 className='text-light text-center'>{serviceCount}</h4>
                            <h5 className='text-light text-center'>HAPPY SERVICES</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12" id='abtcol'>
                <div className="card border-0" id='abtcard'>
                    <div className="card-body" id='abtbody'>
                        <div className="abticondiv">
                            <h1><i className="fa-solid fa-truck-pickup"></i></h1>
                            <h4 className='text-light text-center'>{truckCount}</h4>
                            <h5 className='text-light text-center'>HAPPY DELIVERY</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12" id='abtcol'>
                <div className="card border-0" id='abtcard'>
                    <div className="card-body" id='abtbody'>
                        <div className="abticondiv">
                            <h1><i className="fa-solid fa-face-smile"></i></h1>
                            <h4 className='text-light text-center'>{clientCount}</h4>
                            <h5 className='text-light text-center'>HAPPY CLIENT</h5>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12" id='abtcol'>
                <div className="card border-0" id='abtcard'>
                    <div className="card-body" id='abtbody'>
                        <div className="abticondiv">
                            <h1><i className="fa-solid fa-helmet-safety"></i></h1>
                            <h4 className='text-light text-center'>{expertsCount}</h4>
                            <h5 className='text-light text-center'>HAPPY EXPERTS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutinterval