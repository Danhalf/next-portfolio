import React from 'react';

const About = () => {
  return (
    <article className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center text-slate-500">
        <blockquote>The doer alone learneth.</blockquote>
        <h2>
          Hi, i'm <span className="text-[#4f61a4]"> Aleksei</span>
        </h2>
        <h2>A Front-End Web Developer</h2>
        <p className="max-w-[70%] mx-auto py-4">
          I’m a front-end web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I’m focused on building responsive front-end web applications while
          learning back-end technologies.
        </p>
      </div>
    </article>
  );
};

export default About;
