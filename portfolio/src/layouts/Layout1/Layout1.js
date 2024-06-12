import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../../pages/Landing/Landing.js'

function Layout1() {
    return (
        <div className='d-flex flex-column'>
            {/* <div>Layout1</div> */}
            <Routes>
                {/* <Route path="/" Component={Home} /> */}
                <Route path="/" Component={Landing} />
                <Route path="/works" Component={Landing} />
            </Routes>
        </div>
    )
}

export default Layout1
