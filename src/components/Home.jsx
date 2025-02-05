"use client"
import React, {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import play2 from '../assets/play2.png'
import robot33 from '../assets/robot33.png'
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
import { useState } from 'react';


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Floating animation configuration
  const floatingElements = Array(6).fill(null);

  return (
    <div id='home' className={`${isDarkMode ? 'bg-[#0E0E0E]' : 'bg-white'} font-Nunito relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((_, index) => (
          <div
            key={index}
            className="absolute opacity-10 mix-blend-soft-light"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + index * 2}s infinite linear`,
              background: `radial-gradient(circle, ${isDarkMode ? '#3f3f46' : '#e4e4e7'}, transparent)`,
            }}
          ></div>
        ))}
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x"></div>
      </div>

      <header className="px-4 bg-[#171719] flex flex-wrap items-center py-6 shadow-md relative z-10">
      <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-3xl flex font-EBGaramond text-white font-semibold pl-28">
            <Image alt='code-craft-logo' className='h-10 mr-3 rounded-full' width={56} src={logo} />
            CodeCraft
          </a>
        </div>
        <button onClick={toggleTheme} className="text-white">
          {isDarkMode ? '🌞' : '🌙'}
        </button>
        
        <div className="hidden px-24 md:flex md:items-center md:w-auto w-full" id="menu">
    <nav className='py-1 max-sm:hidden'>
        <ul className="md:flex items-center justify-between text-base text-[#9f9b9b] font-medium pt-4 md:pt-0">
            <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300" href="/">Home</Link>
            </li>
            <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300" href="#course">Course</Link>
            </li>
            <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300"href="#about-us">About Us</Link>
            </li>
            <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300" href="#feedback">Blog</Link>
            </li>
            <li><Link className="md:p-4 py-3 mx-2.5 hover:text-white transition-all duration-300 relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300" href="/signin">Sign In</Link>
            </li>
        </ul>
    </nav>
</div>
      </header>

      <div className='bg-[#0E0E0E] py-72 flex 2xl:max-w-[100%] 2xl:justify-center xl:max-w-[85%] xl:justify-center md:justify-center md:max-w-[85%] relative z-10'>
        <div className='flex'>
          <div className='space-y-3 relative'>
            <h3 className='text-5xl pt-4 font-bold bg-gradient-to-b from-[#EDF1F4] to-[#C3CBDC] bg-clip-text text-transparent animate-fade-in-down'>
              Upskill yourself ●
            </h3>
            <h1 className='max-w-3xl rounded-2xl mr-4 py-3 px-1 bg-gradient-to-b from-[#EDF1F4] to-[#C3CBDC] text-5xl font-bold animate-fade-in-up delay-100'>
              Code Your Dreams Into Reality ✔
            </h1>
            <p className='max-w-3xl text-xl text-pink-600 animate-fade-in-up delay-200'>
              Join our platform to access affordable, top-rated programming courses. Develop apps, build websites, and create software that changes the world.
            </p>
            <div className='flex items-center space-x-3 animate-fade-in-up delay-300'>
              <Link href="#course">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Our Courses
                  </span>
                </button>
              </Link>
              <Link href="/signin">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Become our community member!
                  </span>
                </button>
              </Link>

              <div className=' flex absolute gap-x-5 right-[20px]'>
                <Image
                  alt='play-button'
                  className='w-16 cursor-pointer rounded-full hover:shadow-pink-600 shadow-md transition-transform duration-300 hover:scale-110 animate-bounce-slow '
                  src={play3}
                />
                <div
            className="absolute transitiona-all duration-1000 opacity-20 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
                <ul className='bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] px-4 py-2 rounded-lg animate-slide-in-right text-white '>
                    <li><h1 className=' text-xl '>Join AI Training</h1></li>
                    <li><p className=' text-base font-light'>By our industry experts </p></li>
                </ul>
              </div>
              
            </div>
          </div>
          
          <div className='relative max-w-7xl flex gap-0.5'>
            <Image
              alt=''
              className='mb-24 relative w-52 z-10 animate-float right-[20px]'
              src={robot2}
            />
            <div className='absolute z-10 w-32 animate-float-reverse left-[180px] bottom-[300px]'>
              <Image className='' alt='' src={robot33} />
            </div>
            
            <div className='absolute top-44 max-w-60 animate-spin-slow'>
              <Image alt='' src={round} />
            </div>
            
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default Home;