
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div  className='bg-rose-600 h-12'>
        <div className='text-yellow-400 flex justify-between items-center'> 
<h1 className='text-2xl font-semibold m-2 cursor-pointer'>Fiza Shamshair</h1>
<ul className='flex gap-4 mr-4 cursor-pointer'>


        <Link className= 'hover:text-blue-700' href= "/">Home</Link>
        <Link className= 'hover:text-green-800'   href= "aboutus">About-us</Link>
        <Link className= 'hover:text-pink-900' href= "skills">Skills</Link>
        <Link className= 'hover:text-purple-900'  href= "contactus">Contact-us</Link> 
        

      </ul>
 
    </div>

    </div>
  )
}

export default Navbar