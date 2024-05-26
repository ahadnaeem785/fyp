import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
        <ul className='flex justify-between items-center py-2 pl-8 pr-4'>
            <Link href={""} className=''><li className='text-xs text-gray-200 underline underline-offset-2 hover:text-yellow-500/60'>Home</li></Link>
            <Link href={""} className=''><li className='text-xs text-gray-200 underline underline-offset-2 hover:text-yellow-500/60 ml-2'>Ai Styles</li> </Link>
            <Link href={""} className=''><li className='text-xs text-gray-200 underline underline-offset-2 ml-2 hover:text-yellow-500/60'>Barbar Profile</li></Link>
            <Link href={"/"} className=''><li><div className='flex justify-center items-center ml-6'><Image src={require("../public/pictures/logo.png")} alt='logo' height={100} width={100}/> <span className='text-yellow-500/65 font-semibold'>SHAPE YOUR STYLE</span></div></li></Link>
            <Link href={""} className=''><li className='text-xs text-gray-200 underline underline-offset-2 hover:text-yellow-500/60'>Services</li></Link>
            <Link href={""} className=''><li className='text-xs text-gray-200 underline underline-offset-2 hover:text-yellow-500/60'>Virtual Closet</li></Link>
            <Link href={""} className=''><li className='text-xs text-gray-200 underline underline-offset-2 hover:text-yellow-500/60'>Contact us</li></Link>
            <button className='bg-yellow-600/90 px-3 py-[6px] text-xs hover:bg-yellow-600/80  rounded-lg text-gray-100'>Login</button>
        </ul>
    </div>
  )
}
