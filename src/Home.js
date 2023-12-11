
import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'

const courses = [
  { name: 'C', duration: 'Duration: 25 days', fee: 'Fee: RS 500' },
  { name: 'Cpp & Problem Solving', duration: 'Duration: 25 days', fee: 'Fee: Rs 500' },
  { name: 'Data Structures', duration: 'Duration: 30 days', fee: 'Fee: Rs 1000'},
  { name: 'C,Cpp,DSA', duration: 'Duration: 60 days', fee: 'Fee: Rs 1500'},
  { name: 'Javascript', duration: 'Duration: 30 days', fee: 'Coming Soon'},
  { name: 'Html', duration: 'Duration: 30 days', fee: 'Coming Soon'},
  { name: 'Css', duration: 'Duration: 30 days', fee: 'Coming Soon' },
  { name: 'React', duration: 'Duration: 30 days', fee: 'Coming Soon'},
  { name: 'Node', duration: 'Duration: 30 days', fee: 'Coming Soon'},
  { name: 'Java', duration: 'Duration: 30 days', fee: 'Coming Soon'},
];

const Home = () => (
  <div className="home-container">
    <div className="heading">Coding Bootcamp 2024</div>

    <div className="course-cards">
      {courses.map((course, index) => (
        <Link to='/syllabus'>
            <div key={index} className="course-card">
          <div className="course-top">{course.name}</div>
          <div className="course-info">
            <div className="course-name">{course.name}</div>
            <div className="course-duration">{course.duration}</div>
            <div className="course-fee">{course.fee}</div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
