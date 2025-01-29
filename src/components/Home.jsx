import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import play2 from '../assets/play2.png'
import play3 from '../assets/play3.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import robot from '../assets/robot.jpg'
import robot2 from '../assets/robot2.png'
import robot3 from '../assets/robot3.png'
import Card1 from '../assets/Card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'
import Card4 from '../assets/Card4.png'
import Card5 from '../assets/Card5.png'
import Card6 from '../assets/Card6.png'
import Card7 from '../assets/Card7.png'
import Card8 from '../assets/Card8.png'
import Card9 from '../assets/Card9.png'
import btnicon1 from '../assets/btnicon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import logo from '../assets/logo.jpg'
import profile3 from '../assets/profile3.png'
import icon1 from '../assets/icon1.png'
import micIcon1 from '../assets/micIcon1.png'
import micIcon2 from '../assets/micIcon2.png'
import roundIcon2 from '../assets/roundIcon2.png'
import listIcon from '../assets/listIcon.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png'
import icon10 from '../assets/icon10.png'
import icon11 from '../assets/icon11.png'
import icon12 from '../assets/icon12.png'
import icon13 from '../assets/icon13.png'
import icon14 from '../assets/icon14.png'
import icon15 from '../assets/icon15.png'
import icon16 from '../assets/icon16.png'
import icon17 from '../assets/icon17.png'
import icon18 from '../assets/icon18.png'
import icon19 from '../assets/icon19.png'
import icon20 from '../assets/icon20.png'
import human1 from '../assets/human1.png'
import human2 from '../assets/human2.png'
import human3 from '../assets/human3.png'
import human4 from '../assets/human4.png'
import smIcons from '../assets/smIcons.png'
import greenCard from '../assets/greenCard.svg'
import background from '../assets/background.jpg'
import fbIcon from '../assets/fbIcon.png'
import yIcon from '../assets/yIcon.png'
import twtIcon from '../assets/twtIcon.png'
import linkedIcon from '../assets/linkedIcon.png'
import Line from '../assets/Line.png'
import comment from '../assets/comment.png'
import comment2 from '../assets/comment2.png'
import round from '../assets/round.png'
import Course from './Course'
import Aboutus from './Aboutus'
import Blog from './Blog'
import Credits from './Credits'


    
const Home = () => {
  return (
<div id='home' className='bg-[#0E0E0E]  font-Nunito'>
    <div className=' flex flex-col '>
    <header className=" px-4 bg-[#171719] flex flex-wrap items-center py-6 shadow-md">
        <div className="flex-1 flex justify-between items-center ">
        
            <a href="#" className="text-3xl flex font-EBGaramond text-white font-semibold pl-28 "><Image alt='code-craft-logo' className='h-10 mr-3 rounded-full' width={56} src={logo}/>CodeCraft</a>
        </div>
        
        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden px-24 md:flex md:items-center md:w-auto w-full" id="menu">
            <nav className='py-1 max-sm:hidden'>
                <ul className="md:flex items-center justify-between text-base text-[#9f9b9b] font-medium pt-4 md:pt-0 ">
                  <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="/"> Home</Link></li>
                  <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="#course"> Course</Link></li>
                  <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="#about-us">About Us</Link></li>
                  <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="#feedback">Blog</Link></li>
                  <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white hover:text-lg" href="/signin">Sign In</Link></li>
                </ul>
            </nav>
        </div>
    </header>
      <div className='bg-[#0E0E0E] py-72 flex 2xl:max-w-[100%] 2xl:justify-center xl:max-w-[85%] xl:justify-center md:justify-center md:max-w-[85%] '>
       
            <div className='flex '>
                <div className=' space-y-3 '>
                    <h3 className=' text-5xl pt-4 font-bold bg-gradient-to-b from-[#EDF1F4] to-[#C3CBDC] bg-clip-text text-transparent'>Upskill yourself ●</h3>
                    <h1 className='max-w-3xl rounded-2xl mr-4 py-3 px-1 bg-gradient-to-b from-[#EDF1F4] to-[#C3CBDC] text-5xl font-bold '>Code Your Dreams Into Reality ✔</h1>
                    <p  className=' max-w-3xl text-xl font-thin text-pink-500'>Join our platform to access affordable, top-rated programming courses. Develop apps, build websites, and create software that changes the world.</p>
                    <div className=' flex items-center space-x-3'>
                        <button className=' h-fit text-base hover:text-pink-700 border border-pink-950 hover:bg-pink-200 py-3 px-6 text-pink-500 rounded-lg bg-[#EDF1F4]'>Our Courses</button>
                        <button className='h-fit text-base hover:text-pink-700 border border-pink-950 hover:bg-pink-200 py-3 px-6 text-pink-500 rounded-lg bg-[#EDF1F4]'>Become our community member!</button>
                        <div className=' px-14 '>
                            <Image alt='' className='w-16 cursor-pointer rounded-full  hover:shadow-pink-600 shadow-md' src ={play3}/>
                        </div>
                    </div>
                </div>
                <div className=' relative max-w-52 flex gap-0.5'>
                        <Image alt='' className='mb-24 relative z-10' src={robot2}/> 
                        <ul className=' absolute z-50 top-56  bg-[#EDF1F4] px-4 py-2 rounded-lg '>
                            <li><h1 className='text-black text-xl '>Join AI Training</h1></li>
                            <li><p className='text-black text-base font-light'>By our industry experts </p></li>
                        </ul>
                    <div>
                        <Image alt='' className='absolute top-32 max-w-60' src={round}/>          
                    </div>
                    <div>
                        <Image alt='' className='absolute z-10 max-w-24' src={robot3}/>
                    </div>
                </div>
            </div>                
    </div>
    </div>
</div>
  )
}

export default Home