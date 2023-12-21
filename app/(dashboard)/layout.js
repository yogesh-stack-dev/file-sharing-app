import React from 'react'
import SideNav from 'app/(dashboard)/_components/SideNav.js'
import TopHeader from 'app/(dashboard)/_components/TopHeader.js'

function layout({children}) {
  return (
    <div>
      <div className='  h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden'>
        <SideNav/>
      </div> 
      
      <div className=' md:ml-64'>
        <TopHeader/>
        {children}
      </div>   
    </div>
  )
}

export default layout;