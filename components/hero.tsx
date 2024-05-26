import React from 'react'
import Navbar from './navbar'

export default function Hero() {
    return (
        <div className='mb-[100px] '>
            <div className="hero min-h-screen custom-image bg-fixed bg-center bg-no-repeat">
                <div className="hero-overlay bg-opacity-60"></div>
                <h1 className="mb-5 text-5xl font-bold text-gray-200 -mt-20">Unlock Your Ultimate Look</h1>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-sm mt-24">
                        <p className="mb-5">Style Alerts Deliverd! Elevate Your Look with Exclusive Recommnendations</p>
                        <button className="py-3 px-4 text-xs rounded-lg border-none hover:bg-yellow-700/80 duration-150  text-gray-100 bg-yellow-600/90">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
