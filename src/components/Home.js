import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="typing-animation">Welcome to EduCore</h1>
        <p>
          At EduCore, we are committed to transforming education through innovation and excellence. 
          Our mission is to provide students with high-quality learning experiences, expert guidance, and 
          state-of-the-art facilities to help them achieve their academic and professional goals.
        </p>
        <p>
          Join us and explore a wide range of courses, meet our experienced faculty, and benefit from our 
          structured timetable and comprehensive exam schedules.
        </p>
      </div>
      <div className="home-image">
        <img src="/images/main.jpg" alt="Education Banner" />
      </div>
    </section>
  );
};

export default Home;
