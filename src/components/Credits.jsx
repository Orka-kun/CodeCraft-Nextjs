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


export default function Credits() {
  return (
      <div className='bg-black text-white max-xl:px-32 max-2xl:px-28 max-xl:text-xxxsm'>
      <div className=' grid grid-cols-4 max-w-7xl mx-auto pt-24 pb-10'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <Image alt='' className='max-w-9 rounded-full' src={logo}/>
            <h1 className='text-3xl font-EBGaramond'>CodeCraft</h1>
          </div>
          <p className='text-base font-light max-w-64 max-xl:max-w-56 max-2xl:max-w-56'>
          If you are seeking top-tier programming courses, this platform is your ultimate destination!</p>
          <div className='flex gap-4'>
            <Image alt='' className=' max-h-8 max-w-8' src={fbIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={yIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={twtIcon}/>
            <Image alt='' className=' max-h-8 max-w-8' src={linkedIcon}/>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Company</h1>
          <h3 className='text-base font-light'>Career</h3>
          <h3 className='text-base font-light'>Join as an instructor</h3>
          <h3 className='text-base font-light'>Privacy Policy</h3>
          <h3 className='text-base font-light'>Refund Policy</h3>
          <h3 className='text-base font-light'>Conditions</h3>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Others  </h1>
          <h3 className='text-base font-light'>Blog</h3>
          <h3 className='text-base font-light'>Guidelines</h3>
          <h3 className='text-base font-light'>Certifications</h3>
          <h3 className='text-base font-light'>All Courses </h3>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Contact Us </h1>
          <h3 className='text-base font-light'>WhatsApp: +8801680422735 (24x7)</h3>
          <h3 className='text-base font-light'>Abroad : +8806 895 926 23</h3>
          <h3 className='text-base font-light'>Email: orkadas@gmail.com</h3>
        </div>
      </div>
      <Image alt='' className=' py-10 mx-auto max-w-4xl' src={Line}/>
      <p className=' text-[.8rem] text-center font-light pb-10'>
      Copyright © 2023 - 2024 CodeCraft. All rights reserved.</p>
  </div>
    
  )
}
