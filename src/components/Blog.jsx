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

export default function Blog() {
  return (
    <>
      <div id='feedback' className='bg-[#E5E5E5] pb-20'>
    <div className="flex justify-center text-2xl md:text-4xl font-bold pt-20 pb-10">
    Feedback
    </div>
    <div className='max-xl:px-28 max-2xl:px-28'>
    <div className=''>
      <ul className='grid grid-cols-3 max-w-7xl mx-auto gap-2'>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>Before taking this course, I struggled with understanding databases. Now I can design and manage SQL databases with ease, and I have even integrated them into full-stack applications.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>DevOps Engineer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>This course was perfect for learning mobile app development. I now know how to build cross-platform apps using Flutter, and I have already published my first app on the Play Store!</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Android Developer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>The course taught me how to write clean and efficient Python code. The instructors explained complex algorithms in a way that was easy to understand, and now I can apply them in my projects.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Django Developer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>The flexibility of learning at my own pace helped me balance my studies with my job. I highly recommend it to anyone looking to enhance their skills!</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Software Engineer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>The course was a game-changer for me. I learned how to use React for front-end development and connect it with Node.js on the backend. The real-world projects were incredibly helpful.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>MERN Stack Developer</h3>
        </div>
        </div>
      </li>
      <li className='bg-[#171719] rounded-lg p-5'>
        <Image alt='' className='max-w-10 pb-4' src={icon19}/>
        <p className='text-sm text-[#F5F5F7] font-extralight pb-4'>I had no idea how to start my first coding project. This course helped me understand the basics of HTML, CSS, and JavaScript, and now I am confidently building my own websites.</p>
        <div className='flex items-center'>
        <Image alt='' className='max-h-11 max-w-11 bg-white rounded-full' src={comment}/>
        <div className='pl-2'>
          <h1 className='font-bold text-sm text-white'>John Doe </h1>
          <h3 className='text-xxs text-[#F5F5F7]'>Web Developer</h3>
        </div>
        </div>
      </li>
      </ul>
    </div>
    <div className='relative p-36 flex items-center justify-center'>
      <Image alt='' className='absolute max-w-9xl rounded-xl h-72 ' src={background}/>
      <div className='relative z-10 flex items-center gap-10'>
         <div className='text-white'>
            <h3 className=' text-3xl font-bold'>Join CodeCraft</h3>
            <h1 className='text-[#D1FFA3] text-4xl font-bold'>Unlock exclusive access to all courses at 25% off</h1>
            <h3 className='text-3xl font-bold'>Elevate your skills without breaking the bank!</h3>
         </div>
          <button className='bg-[#FFFFFF] text-black rounded-full px-4 py-2 hover:text-pink-600'>Become a member </button>
      </div>
    </div>
    </div>

    <div className="flex justify-center text-2xl md:text-4xl font-bold">
    Got Questions? We have Got Answers!
    </div>
    <div className='grid grid-rows-5 max-w-[52rem] pt-10 mx-auto gap-2 pb-10'>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>Is it possible to withdraw from a course?</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>Will my certification ever expire?</h1>
      </div>   
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>How do I report a technical issue?</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>Forgot your password? No problem!</h1>
      </div>
      <div className=' bg-white font-bold text-base rounded-lg flex '>
          <h1 className=' py-6 pl-5'>How can I contact your team?</h1>
      </div>
      

    </div>

</div>
    </>
  )
}
