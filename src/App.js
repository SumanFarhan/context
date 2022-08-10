import React from 'react'
import Lottie from "lottie-react";
import createProject from './Assets/35684-business-team-discusses-project.json'
import Cloudplan from './Cloudplan';
import Table from './Table';
import './index.css';

const App = () => {
  return (
    <>
      <div className="App"> 
        <div className="div1">
        <Lottie animationData={createProject} loop={true} />
        </div>
        <div className="div2">
          <h3>Find all your projects here</h3>
          <span>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
        </div>
      </div>
      <Cloudplan/>
      <Table/>
    </>
  )
}

export default App