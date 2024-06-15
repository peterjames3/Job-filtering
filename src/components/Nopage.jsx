import React from 'react';
import Primary from './Primary';

const NoPage = () => {
  return (
    <section className="w-full min-h-[50rem] flex items-center justify-center">
      <div className=" max-w-[800px]  text-2xl font-medextra font-Kumbh">
      <Primary />
        <h1>
          <span className="text-red-400 pr-5">Error: 404</span>No page found
        </h1>
       
      </div>
    </section>
  );
};

export default NoPage;
