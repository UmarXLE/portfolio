import React from 'react';
import styled from "@emotion/styled";

const Form = () => {
    return (
        <WrapperMain>
            <input className='input-style animate-input-1' type="text" placeholder='Your name .'/>
            <input className='input-style animate-input-2' type="text" placeholder='Your E-mail .'/>
            <input className='input-style animate-input-3' type="text" placeholder='Your number .'/>
            <textarea className='textarea-style animate-input-4' placeholder='Your message .'></textarea>
            <button className='button-style'>Send</button>
        </WrapperMain>
    );
};

const WrapperMain = styled('form')`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
  
  .input-style , .textarea-style {
    border: 2px solid white;
    background: none;
    color: white;
    padding: 15px 15px 15px 20px;
    font-size: 13px;
    font-family: 'Rubik Mono One', sans-serif; 
  }
  
  .button-style {
    width: 20%;
    margin: 0 auto;
    background: none;
    padding: 12px 25px;
    border: 2px solid white;
    background: none;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Rubik Mono One', sans-serif;
    animation:flash; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 10s; / 
  }
  
  .animate-input-1{
      animation: bounceInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 10s; /
  }
  .animate-input-2{
      animation: bounceInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 10s; /
  }
  .animate-input-3{
      animation: bounceInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 10s; /
  }
  .animate-input-4{
      animation: bounceInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 10s; /
  }

`


export default Form;