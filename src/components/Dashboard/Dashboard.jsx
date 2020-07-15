import React from 'react';
import './style.css';

const Dashboard = () => {
  return (
    <section id='dashboard'>
      <iframe
        title='COVID19 Dashboard'
        src='https://who.sprinklr.com/'
        frameborder='0'
      ></iframe>
    </section>
  );
};

export default Dashboard;
