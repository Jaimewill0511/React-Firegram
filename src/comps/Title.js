import React from 'react';

import { AiOutlineCamera } from "react-icons/ai";

import { RiMessengerLine } from "react-icons/ri";

const Title = () => {
  const size = '2em'
  return (  
    <div className="title">
    <div className="title-h1">
    <RiMessengerLine   size={size}/>
    <h1>Tingram</h1>
    <AiOutlineCamera  size={size}/>
    </div>
     
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;