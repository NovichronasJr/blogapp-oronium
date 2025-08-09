import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex justify-evenly items-center p-4'>
       <Image
       width={139}
       height={34}
       src={'/Logo (Replace).png'}
       alt='BeyondUI'
       />
       <div className='flex items-center gap-8'>
        <ul className='flex flex-row list-none gap-[20px] text-[14px]'>
            <Link href={'/'}><li>Homepage</li></Link>
            <Link href={'/about'}><li>About us</li></Link>
            <Link href={'/features'}><li>Features</li></Link>
            <Link href={'/blogs'}><li>Blog</li></Link>
            <Link href={'/contact'}><li>Contact us</li></Link>
        </ul>
        <div className='flex gap-2'>
            <button className='w-[80px] h-[40px] border-[#E4E7EC] border-1 rounded-[10px] text-[14px]'>Demo</button>
            <button className='w-[118px] h-[40px] rounded-[10px] bg-[#141C25] text-white text-[14px]'>Get Started</button>
        </div>
       </div>
    </nav>
  )
}

export default Navbar
