import React from 'react';

const Presentation = ({ socialsList }) => {
  return (
    <article className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <blockquote>
          <i>The doer alone learneth.</i>
        </blockquote>
        <h2>
          Hi, i`m <span className="text-[#9ba183]">Aleksei</span>
        </h2>
        <h2 className="py-2">A Front-End Web Developer</h2>
        <p className="max-w-[70%] mx-auto py-4">
          I`m a front-end web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I`m focused on building responsive front-end web applications while
          learning back-end technologies.
        </p>
        <ul className="text-primary flex flex-wrap justify-center gap-4">
          {socialsList.map((iconItem, index) => (
            <li
              key={iconItem.icon + index}
              className="m-2 flex items-center justify-center p-4 button-rounded"
            >
              <iconItem.icon size={25} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Presentation;
