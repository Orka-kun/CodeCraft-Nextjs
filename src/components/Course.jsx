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


export default function Course() {
    const cardData = [
        {
          image : Card1,
          tags: [
            { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
            { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
          ],
          description: 'Become a Web Developer by building real life projects',
          details: [
            { icon: icon2, text: 'Advanced' },
            { icon: icon3, text: 'Professional Certificate' },
            { icon: icon4, text: '60 Hour Lecture' }
          ],
          instructor: {
            image : profile3,
            name: 'Mr. John Doe',
            details: '15 years of experince, Microsoft'
            },
          price: '7000 Taka',
          originalPrice: '8,999 Taka',
          buttonText: 'Enroll Now'
        },
        {
            image : Card2,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card3,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card4,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card5,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card6,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card7,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card8,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card9,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card7,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card8,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
          {
            image : Card9,
            tags: [
              { text: 'Web Development', color: 'blue-600', bgColor: 'blue-100' },
              { text: 'Pre-recorded Classes', color: '[#877B00]', bgColor: '[#F2ECAE]', icon: btnicon1 }
            ],
            description: 'Become a Web Developer by building real life projects',
            details: [
              { icon: icon2, text: 'Advanced' },
              { icon: icon3, text: 'Professional Certificate' },
              { icon: icon4, text: '60 Hour Lecture' }
            ],
            instructor: {
              image : profile3,
              name: 'Mr. John Doe',
              details: ' 15 years of experince, Microsoft ' 
            },
            price: '7,000 Taka',
            originalPrice: '8,999 Taka',
            buttonText: 'Enroll Now'
          },
      ]
  return (
    <>
      <div id='course' className=" bg-[#171719] py-16 ">
      
      <div className="flex text-white justify-center text-2xl md:text-4xl font-bold py-4">
      Our New Courses
      </div>
      
      <ul className=" rounded-lg max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-10 max-xl:px-28 max-2xl:px-28 " >
            {cardData.map((card, index) => (
              <li key={index} className="rounded-xl relative bg-[#FAF7F0] flex flex-col justify-between border  shadow-md hover:shadow-pink-600 animate-appear" style={{
    animationTimeline: 'view()',
    animationRange: 'entry 0% cover 20%',
  }}>
                <a className="relative">
                  <Image alt='' className=" relative object-cover  " src={card.image} loading="lazy" />
                </a>
                <div className="flex flex-col justify-between gap-3 px-4 py-2 mx-3">
                  <div className='flex'>
                    {card.tags.map((tag, i) => (
                      <div key={i} className={`text-${tag.color} bg-${tag.bgColor} focus:outline-none rounded-full text-xxsm px-1.5 py-0.5 mx-1 flex`}>
                        {tag.icon && <Image alt='' className='mx-1' src={tag.icon} />}
                        {tag.text}
                        
                      </div>
                      
                    ))}
                  </div>
                  <p className="text-black-600 two-lines font-bold">
                    {card.description}
                  </p>
                  <div className='flex text-xxsm space-x-2'>
                    {card.details.map((detail, i) => (
                      <React.Fragment key={i}>
                        <Image alt='' className='w-3 h-3' src={detail.icon} />
                        <span>{detail.text}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className='flex items-center'>
                    <Image className='w-12' alt='' src={card.instructor.image} />
                    <div className='mx-1'>
                      <h1 className='text-sm font-bold'>{card.instructor.name}</h1>
                      <p className='text-xxsm'>{card.instructor.details}</p>
                    </div>
                  </div>
                  <div className='h-0.5 max-w-96 bg-[#E5E5E5]'>
      
                  </div>
                  <span className="flex flex-wrap text-sm gap-4 my-1 items-center font-bold">
                    <h1 className='text-black text-xl'>{card.price}</h1>
                    <p className='text-[#4F4F4F] line-through'>{card.originalPrice}</p>
                    <Link href="/enrollment">
                    <button className='bg-[#171719] shadow-md  hover:shadow-pink-600 hover:text-pink-600  text-white text-sm font-normal p-3 rounded-lg flex-1'>
                      {card.buttonText}
                    </button>
                    </Link>
                  </span>
                </div>
              </li>
            ))}
            </ul>
      </div>
      <div className='bg-[#09090B] py-28 flex justify-center gap-12 xl:px-24 max-xl:px-28'>
        <div className='text-white max-w-2xl'>
          <h1 className='text-4xl font-bold pb-4'>Your Journey to a Successful Tech Career Starts Here ✔</h1>
          <p className='text-lg font-light pb-4 pr-7'>Transform your coding skills with structured learning paths and expert-led guidance, ensuring you stay ahead in the tech industry.</p>
          <ul className='text-2xl font-medium'>
            <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Industry-Relevant Courses</li>
            <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Mentorship from Senior Developers</li>
            <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Learn Practical Skills Used by Top Tech Companies</li>
            <li className='flex items-center pb-2'><Image className='pr-1 ' src={listIcon} alt=''/>Stay Updated with Emerging Trends and Tools</li>
          </ul>
        </div>
        <div className='grid grid-cols-2 gap-2 max-w-2xl'>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3 '>
          <Image alt='' className='pl-2' src={icon5} /><h1>Full Stack Web Developer Bootcamp</h1>
          </div>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
            <Image alt='' className='pl-2' src={icon6} /><h1>Mastering React and Next.js</h1>
          </div>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
            <Image alt='' className='pl-2' src={icon7} /><h1>AI and Machine Learning with Python</h1>
          </div>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
            <Image alt='' className='pl-2' src={icon8} /><h1>Mastering APIs and Microservices</h1>
          </div>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
            <Image alt='' className='pl-2' src={icon9} /><h1>Data Structures and Algorithms in Depth</h1>
          </div>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
            <Image alt='' className='pl-2' src={icon10} /><h1 >Blockchain Development for Beginners</h1>
          </div>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
            <Image alt='' className='pl-2' src={icon11} /><h1>DevOps Foundations with Docker and Kubernetes</h1>
          </div>
          <div className='bg-white px-1 py-3 text-lg cursor-pointer font-normal rounded-lg text-center flex items-center gap-x-3'>
            <Image alt=''  src={icon12} /><h1>Cybersecurity Essentials: From Theory to Practice</h1>
          </div>
        </div>
        
      </div>
    </>
  )
}
