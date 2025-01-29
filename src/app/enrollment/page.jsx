import React from "react";
import CourseDetails from "./CourseDetails";
import Link from "next/link";


const page = () => {
  return (
    <div className="bg-[#0E0E0E] font-Nunito min-h-screen pt-10">
      <header className=" text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Enroll in Your Desired Course</h1>
          <div className="flex justify-between">
            <p>Enroll Now ✔</p>
            <Link href="/" className="shadow-md hover:text-pink-600">Go to Home Page</Link>
          </div>
        </div>
      </header>


      <main className="container mx-auto py-8">
        {/* Course Details Section */}
        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Web Development Bootcamp</h2>
          <p>Become a Web Developer by building real-life projects.</p>
          <ul className="mt-4">
            <li>⬛ Advanced Training</li>
            <li>⬛ Professional Certificate</li>
            <li>⬛ 60 Hour Lecture</li>
            <li>⬛ Industry Experts</li>
          </ul>
          <p className="text-green-600 font-bold text-lg mt-4">
            Price: 7,000 Taka <span className="px-2 line-through text-black">8,999 Taka</span>
          </p>
        </section>
        <section className="bg-white shadow rounded-lg p-6 mb-8">
            <CourseDetails/>
        </section>
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Complete Your Enrollment</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Payment Method</label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option value="credit">Credit/Debit Card</option>
                <option value="bkash">bKash / Nagad</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>I agree to the terms and conditions.</span>
            </div>
            <button type="submit" className='bg-[#171719] shadow-md  hover:shadow-pink-600 hover:text-pink-600  text-white text-sm font-normal p-3 rounded-lg flex-1'> Enroll Now </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default page