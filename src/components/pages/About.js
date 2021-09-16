import React from "react";

const About = () => {
  return (
    <div className='card'>
      <h1>About This App</h1>
      <br />
      <p>
        A simple <strong>ReactJS</strong> app made with <strong>Hooks</strong>{" "}
        and <strong>Context API</strong> to search and view github profiles in a
        user friendly manner.
      </p>
      <br />
      <p>Version: 1.2</p>
      <br />
      <a href='https://github.com/clinton1719' target='_blank' rel='noreferrer'>
        My Github profile
      </a>
    </div>
  );
};

export default About;
