import React from 'react';
import styled from "@emotion/styled";

const About = () => {
    return (
        <WrapperMain>
            <h1 className='title_about'>About Me</h1>
            <WrapperContent>
                <p className='text animate-1'>I am a frontend developer. My main area of work is creating user interfaces for web applications. I am developing and optimizing frontend code that is responsible for the visual representation and interaction of users with websites or applications.</p>
                <p className='text animate-2'>My experience includes working with various technologies and tools, such as HTML, CSS, JavaScript, frameworks and libraries, for example, React or Angular. I am also familiar with the principles of adaptive and responsive design so that my work looks good and functions on different devices and screens.</p>
                <p className='text animate-3'>I strive to create clean and efficient code that is easy to maintain and scale. I also pay attention to details and design so that the user interface is attractive and user-friendly.</p>
                <p className='text animate-4'>I will be glad to cooperate with you :)</p>
            </WrapperContent>
        </WrapperMain>
    );
};

const WrapperMain = styled('section')`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
  
  .title_about {
    font-size: 20px;
    margin-bottom: 30px;
    color: white;
    text-align: center;
    animation:flash; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 4s;
  }
  
  @media screen and (max-width: 576px){
    width: 95%;
  }
`

const WrapperContent = styled('div')`
   text-align: center;
   
   .text {
      margin-bottom: 15px;
      line-height: 27px;
   }
   
   .animate-1{
      animation: slideInLeft; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 12s;
   }
   .animate-2{
      animation: slideInRight; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 12.5s;
   }
   .animate-3{
      animation: slideInLeft; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 13s;
   }
   .animate-4{
      animation: slideInRight; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 13.5s;
   }
   
   
`

export default About;