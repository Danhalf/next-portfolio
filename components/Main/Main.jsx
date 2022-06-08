import React from 'react';
import Presentation from './Presentation/Presentation';
import About from './About/About';

const Main = ({ socialsList }) => {
  return (
    <main className="bg-slate-600 text-secondary">
      <Presentation socialsList={socialsList} />
      <About />
    </main>
  );
};

export default Main;
