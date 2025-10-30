import React from 'react'
// ======================================== ROUTERS ========================================
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// ======================================== INTROPAGES  ========================================

import IntroPage from './Pages/IntroPage'
// ======================================== REGISTERPAGE  ========================================

import RegisterPage from './Pages/RegisterPage'
// ======================================== LOGINPAGES ========================================
import LoginForm from './Components/FormComponent/LoginForm'

// ========================================CONTEXTPAGE  ========================================

import ContextProvider from './Context/ContextProvider'
// ======================================== HOMEPAGE ========================================

import Page1 from './Pages/HomePgae/Page1'
// ========================================  ========================================
// ======================================== INDOOR PAGES ========================================

import Shop1 from './Pages/ShopPage/Shop1'
import Air from './Pages/IndoorPages/Air'
import IndoorFlower from'./Pages/IndoorPages/IndoorFlower'
import IndoorFoliage from './Pages/IndoorPages/IndoorFoliage'
import InSucculentandCact from './Pages/IndoorPages/InSucculentandCact'

// ======================================== OUTDOOR PAGES ========================================

import Shop2 from './Pages/ShopPage/Shop2'
import Tree from './Pages/OutdoorPages/Tree'
import OutFlower from './Pages/OutdoorPages/OutFlower'
import OutVegtable from './Pages/OutdoorPages/OutVegtable'
import OutHerbal from'./Pages/OutdoorPages/OutHerbal'

// ======================================== SEEDS PAGES ========================================

import Shop3 from './Pages/ShopPage/Shop3'
import SeedFlower from './Pages/SeedPages/SeedFlower'
import SeedFoliage from './Pages/SeedPages/SeedFoliage'
import SeedVeg from './Pages/SeedPages/SeedVeg'

// ======================================== SOIL AND FERTILIZERS PAGES ========================================

import Shop4 from './Pages/ShopPage/Shop4'
import Soil from './Pages/SoilAndFertilizers/Soil'
import Inorganic from './Pages/SoilAndFertilizers/Inorganic'
import Organic from './Pages/SoilAndFertilizers/Organic'
import Liquid from './Pages/SoilAndFertilizers/Liquid'


// ======================================== ACCESSORIES PAGES ========================================

import Shop6 from './Pages/ShopPage/Shop6'
import Tool from './Pages/Accessories/Tool'
import CareAndSupport from './Pages/Accessories/CareAndSupport'
import ContainerandStorage from './Pages/Accessories/ContainerandStorage'
import WateringAccessories from './Pages/Accessories/WateringAccessories'
import SafetyandComfort from './Pages/Accessories/SafetyandComfort'

// ======================================== DYNAMIC PAGES ========================================
import ProductDynamic from './Pages/ProductPage/ProductDynamic'
import ArrivalProdDynamic from './Pages/ProductPage/ArrivalProdDynamic'


// ======================================== ABOUT PAGES ========================================
import AboutPage from './Pages/Pagesfolder/AboutPage'

// ======================================== PAGE PAGES ========================================

import FaqsPage from './Pages/Pagesfolder/FaqsPage'
import ContactPage from './Pages/Pagesfolder/ContactPage'

// ======================================== PROTECT PAGES ========================================

import Blog from './Pages/BlogPage/Blog'
import ProtectPage from './Pages/ProtectPage'





const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
{/* ======================================== INTROPAGE ============================================= */}
            <Route path='/' element={<IntroPage/>} />
{/* ======================================== REGISTERPAGE ============================================= */}

            <Route path='/register' element={<RegisterPage/>}/>
{/* ======================================== LOGINPAGE ============================================= */}

            <Route path='/login' element={<LoginForm/>}/>
{/* ======================================== HOMEPAGE ============================================= */}

            <Route path='/home' element={<ProtectPage><Page1/></ProtectPage>}/>
{/* ======================================== INDOORPAGE ============================================= */}

            <Route path='/indoor' element={<ProtectPage><Shop1/></ProtectPage>}/>
            <Route path='/inair' element={<ProtectPage><Air/></ProtectPage>}/>
            <Route path='/inflower' element={<ProtectPage><IndoorFlower/></ProtectPage>}/>
            <Route path='/infoliage' element={<ProtectPage><IndoorFoliage/></ProtectPage>}/>
            <Route path='/insucculent' element={<ProtectPage><InSucculentandCact/></ProtectPage>}/>


{/* ======================================== OUTDOORPAGE ============================================= */}

            <Route path='/outdoor' element={<ProtectPage><Shop2/></ProtectPage>}/>
            <Route path='/tree' element={<ProtectPage><Tree/></ProtectPage>}/>
            <Route path='/outflower' element={<ProtectPage><OutFlower/></ProtectPage>}/>
            <Route path='/outveg' element={<ProtectPage><OutVegtable/></ProtectPage>}/>
            <Route path='/outherbal' element={<ProtectPage><OutHerbal/></ProtectPage>}/>
            

{/* ======================================== SEEDSPAGE ============================================= */}

            <Route path='/seeds' element={<ProtectPage><Shop3/></ProtectPage>}/>
            <Route path='/seedflower' element={<ProtectPage><SeedFlower/></ProtectPage>}/>
            <Route path='/seedfoliage' element={<ProtectPage><SeedFoliage/></ProtectPage>}/>
            <Route path='/seedveg' element={<ProtectPage><SeedVeg/></ProtectPage>}/>


{/* ======================================== SOIL&FERTPAGE ============================================= */}

            <Route path='/soilandfer' element={<ProtectPage><Shop4/></ProtectPage>}/>
            <Route path='/soil' element={<ProtectPage><Soil/></ProtectPage>}/>
            <Route path='/inorganic' element={<ProtectPage><Inorganic/></ProtectPage>}/>
            <Route path='/organic' element={<ProtectPage><Organic/></ProtectPage>}/>
            <Route path='/liquid' element={<ProtectPage><Liquid/></ProtectPage>}/>
            
{/* ======================================== ACCOSSERIOSPAGE ============================================= */}

            <Route path='/accessories' element={<ProtectPage><Shop6/></ProtectPage>}/>
            <Route path='/tool' element={<ProtectPage><Tool/></ProtectPage>}/>
            <Route path='/care&support' element={<ProtectPage><CareAndSupport/></ProtectPage>}/>
            <Route path='/container' element={<ProtectPage><ContainerandStorage/></ProtectPage>}/>
            <Route path='/safetycom' element={<ProtectPage><SafetyandComfort/></ProtectPage>}/>
            <Route path='/wateringacc' element={<ProtectPage><WateringAccessories/></ProtectPage>}/>
{/* ======================================== ARRIVALDYNAMICPAGE ============================================= */}

            <Route path='/product/:id' element={<ProtectPage><ArrivalProdDynamic/></ProtectPage>}/>
{/* ======================================== PRODUCTDYNAMICPAGE ============================================= */}

            <Route path='/product/:id' element={<ProtectPage><ProductDynamic/></ProtectPage>}/>
{/* ======================================== BLOGPAGE ============================================= */}

            <Route path='/blog' element={<ProtectPage><Blog/></ProtectPage>}/>
{/* ======================================== FAQSPAGE ============================================= */}

            <Route path='/faqs' element={<ProtectPage><FaqsPage/></ProtectPage>}/>
{/* ======================================== ABOUTPAGE ============================================= */}

            <Route path='/about' element={<ProtectPage><AboutPage/></ProtectPage>}/>
{/* ======================================== CONTACTPAGE ============================================= */}

            <Route path='/contact' element={<ProtectPage><ContactPage/></ProtectPage>}/>

          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App