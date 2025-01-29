"use client"
import React, { useState } from "react";
import dropdown from '../enrollment/dropdown.png'
import Image from "next/image";

const courseContent = [
  {
    title: "Introduction to Web Development",
    topics: [
      "What is Web Development?",
      "Frontend vs. Backend Development",
      "The Web Development Workflow",
    ],
  },
  {
    title: "HTML (HyperText Markup Language)",
    topics: [
      "Structuring a Web Page",
      "Semantic HTML Tags",
      "Forms and Inputs",
      "Accessibility Best Practices",
    ],
  },
  {
    title: "CSS (Cascading Style Sheets)",
    topics: [
      "Styling Basics and Selectors",
      "CSS Flexbox and Grid Layout",
      "Responsive Design with Media Queries",
      "Animations and Transitions",
    ],
  },
  {
    title: "JavaScript (JS)",
    topics: [
      "Basics of JavaScript",
      "DOM Manipulation",
      "Events and Event Listeners",
      "Fetch API and AJAX",
      "ES6+ Features (Arrow Functions, Destructuring, Modules)",
    ],
  },
  {
    title: "Frontend Frameworks and Libraries",
    topics: [
      "Introduction to React.js",
      "Creating Components",
      "State Management with React Hooks",
      "Routing with React Router",
    ],
  },
  {
    title: "Version Control and Collaboration",
    topics: [
      "Using Git and GitHub",
      "Branching and Merging",
      "Pull Requests and Code Reviews",
    ],
  },
  {
    title: "Backend Development Basics",
    topics: [
      "Introduction to Node.js",
      "Setting up a Server with Express.js",
      "Working with APIs",
      "Authentication and Authorization",
    ],
  },
  {
    title: "Databases",
    topics: [
      "Understanding Relational vs. NoSQL Databases",
      "Introduction to MySQL and MongoDB",
      "CRUD Operations with Databases",
      "Connecting a Database to a Backend",
    ],
  },
  {
    title: "Full-Stack Web Development",
    topics: [
      "Integrating Frontend with Backend",
      "Building a RESTful API",
      "Deploying a Full-Stack Application",
    ],
  },
  {
    title: "Advanced Topics",
    topics: [
      "State Management with Redux",
      "Introduction to Next.js for Server-Side Rendering",
      "Web Performance Optimization",
      "Progressive Web Apps (PWAs)",
    ],
  },
  {
    title: "Real-World Projects",
    topics: [
      "Personal Portfolio Website",
      "E-commerce Website with Payment Integration",
      "Blog with User Authentication and CMS Features",
    ],
  },
  {
    title: "Career Guidance",
    topics: [
      "Building a Professional Portfolio",
      "Preparing for Job Interviews",
      "Freelancing Tips and Tricks",
    ],
  },
];

export default function CourseGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Course Includes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    
      {courseContent.map((section, index) => (
        <div
          key={index}
          className="flex flex-col border rounded-lg p-4 shadow-lg bg-white"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <span className="w-full text-left font-semibold text-lg text-gray-700">
              {index + 1}. {section.title}
            </span>
            <span className="text-xl text-gray-500">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-4 text-gray-600">
              <ul className="list-disc ml-6 space-y-2">
                {section.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
