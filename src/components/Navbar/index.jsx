import React, { useState } from 'react'
import MediaQuery from '../MediaQuery'
import { HashLink as Link } from 'react-router-hash-link'
import {IoMenu, IoClose} from 'react-icons/io5'

const links = [
    {section : "About", link : "/#about"},
    {section : "About", link : "/#about"},
    {section : "About", link : "/#about"}
]

const Navbar = () => {
    const isMobile = MediaQuery("(max-width: 600px)");
    const [open, setOpen] = useState(false)
    
    const handleOpenNav = () => {
        setOpen(!open)
    }

  return (
    <div>
        {
            isMobile ? 
            // Mobile View
            (<div className='relative'>
                <div className='flex fixed top-0 w-full bg-white items-center justify-between px-3 py-4 shadow-md'>
                    {
                        open? (<IoClose className="text-2xl" onClick={() => setOpen(false)}/>) : (<IoMenu onClick={handleOpenNav} className="text-2xl"/>)
                    }
                    <div>
                        <button className='font-medium bg-orange-500 text-white py-2.5 rounded-full px-5 text-md'>Coba Kelas</button>
                    </div>
                </div>
                {/* Navbar */}
                <div className={`${open? "bg-white top-[74px] shadow-md" : "hidden -top-[300px]"} absolute w-screen p-5`}>
                    <ul className='space-y-3'>
                        {
                            links.map((val,idx) => (
                                <li key={idx}>
                                    <Link to={val.link}>{val.section}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>) : 
            (<div></div>)
        }
    </div>
  )
}

export default Navbar