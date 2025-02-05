import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import play2 from '../assets/play2.png'
import h1 from '../assets/h1.jpg'
import h2 from '../assets/h2.jpg'
import h3 from '../assets/h3.webp'
import h4 from '../assets/h4.webp'
import h5 from '../assets/h5.png'
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


export default function Aboutus() {
  return (
    <>
      <div id='about-us' className='bg-[#E5E5E5] pb-20'>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
      Our World Class Instructors
    </div>
    <ul className='grid grid-cols-4 max-w-[62rem] mx-auto gap-4 text-white'>
      <li className='bg-[#0E0E0E] rounded-lg'>
        <Image alt='' src={h1} className='max-h-60 rounded'/>
        <div className='text-center py-4 '>
          <h1 className='font-bold text-xl '>Jack Stames </h1>
          <h2 className='text-sm text-pink-700'>Software Engineer </h2>
          <p className='text-xxs'>Microsoft</p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className=' bg-[#0E0E0E] rounded-lg'>
        <Image alt='' src={h2} className='max-h-60 rounded'/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>Frank Tomas </h1>
          <h2 className='text-sm text-pink-700'>Full Stack Developer </h2>
          <p className='text-xxs'>Shopify </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className='bg-[#0E0E0E] rounded-lg'>
        <Image alt='' src={h5} className='max-h-60 rounded'/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>Lee Harry </h1>
          <h2 className='text-sm text-pink-700'>Machine Learning Expert </h2>
          <p className='text-xxs'>Open AI </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
      <li className='bg-[#0E0E0E] rounded-lg'>
        <Image alt='' src={h4} className='max-h-60 rounded'/>
        <div className='text-center py-4'>
          <h1 className='font-bold text-xl '>Mr. Noah Charlie </h1>
          <h2 className='text-sm text-pink-700'>DevOps Engineer </h2>
          <p className='text-xxs'>Google </p>
          <Image alt='' className='mx-auto py-2 max-w-20' src={smIcons}/>
        </div>
      </li>
    </ul>
    </div>
    <div className='bg-white'>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
    What You Get at CodeCraft 
    </div>
    <div className='grid grid-cols-2 max-w-5xl mx-auto gap-x-10 gap-y-14 pb-24 '>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6 ' src={icon13}/>
        <div className=''>
        <h1 className='font-medium text-xl'>24/7 Support </h1>
        <p className='text-base pt-3  '>
        Get access to continuous support throughout your learning journey, ensuring all your questions are answered promptly.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon14}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Professional Certification</h1>
        <p className='text-base pt-3  '>
        Earn industry-recognized certificates to boost your profile and showcase your expertise in the latest technologies.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon15}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Job Interview Preparation</h1>
        <p className='text-base pt-3  '>
        Prepare for job interviews with mock interviews, expert guidance, and tips to land your dream role in tech.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon16}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Career Roadmap </h1>
        <p className='text-base pt-3  '>
        Follow a structured career path designed to take you from beginner to professional, with step-by-step guidance along the way.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon17}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Hands-On Assignments</h1>
        <p className='text-base pt-3  '>Hands-On Assignments
        Apply your skills with real-world assignments that reinforce your learning and build your portfolio.</p>
        </div>
      </div>
      <div className='flex items-start gap-4'>
        <Image alt='' className='max-w-6' src={icon18}/>
        <div className=''>
        <h1 className='font-medium text-xl'>Industry Expert Mentorship</h1>
        <p className='text-base pt-3  '> 
        Learn from seasoned professionals in the tech industry, gaining insights and advice to fast-track your career growth.</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
