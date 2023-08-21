import React from 'react';

import styled from "@emotion/styled";



const Intro = () => {
    return (
        <WrapperMain>
            <div className='content'>
                <h1 className='name animate__animated animate__bounce'>Umar Kylychbekovich</h1>
                <p className='prof animate__animated animate__rotateInUpLeft'>Frontend Developer</p>
            </div>
        </WrapperMain>
    );
};

const WrapperMain = styled('section')`
   width: 80%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin: 0 auto;
   .content {
      color: white;
      .name {
        font-size: 45px;
        animation: bounce; 
        animation-duration: 3s;
      }
      .prof{
        margin-top: 10px;
        font-family: 'Rubik Mono One', sans-serif;
        animation: rotateInUpLeft; 
        animation-duration: 1s;
      }
   }
   
   @media screen and (max-width: 992px){
    .content {
      text-align: center;
      .name {
        font-size: 35px;
      }
      .prof{
        font-size: 15px;
      }
    }
   }
   
   @media screen and (max-width: 767px){
    .content {
      .name {
        font-size: 30px;
      }
      .prof{
        font-size: 14px;
      }
    }
   }
   
    @media screen and (max-width: 576px){
    justify-content: start;
    .content {
      .name {
        font-size: 28px;
      }
      .prof{
        margin-top: 5px;
      }
    }
   }
`

export default Intro;