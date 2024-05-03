"use client"

import React from 'react'
import logo from '@/public/imgs/logo.png'
import Image from 'next/image'
import Link from "next/link"
import { Search ,FileEdit} from "lucide-react"

 export const Navbar = () => {

const [searchBoxVisibility, setSearchBoxVisibility] = React.useState(false)

  return (
    <>
      <nav className='navbar'>
       <Link  href={"/"} className='flex-none w-10'  >
       <Image src={logo} className='w-full' ></Image> 
       </Link>
  
       <div className={'absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show '  + (searchBoxVisibility ? 'show' : 'hide')}>
        <input type="text" placeholder='Search' className=' placeholder:text-dark-grey  w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 md:pl-12 rounded-full ' >
        
        </input>
        <Search  className='absolute right-[10%] md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey' />
       </div>

       <div className='flex items-center gap-3 md:gap-6 ml-auto' >
        <button onClick={() => setSearchBoxVisibility(!searchBoxVisibility)}   className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center   '>
       <Search className='text-xl ' ></Search>
        </button>

        <Link href={'/editor'} className='hidden md:flex gap-2 link ' > <FileEdit></FileEdit>   <p>Write</p></Link>
        <Link className='btn-dark py-2 ' href={'/signin'}> Sign In</Link>
        <Link className='btn-light py-2 hidden md:block ' href={'/signup'}> Sign Up</Link>
       </div>
       
     
    
    </nav>
    </>
  
  )
}


