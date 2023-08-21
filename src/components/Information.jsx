import React from 'react';

import styled from "@emotion/styled";

import informationImg from '../assets/images/information.jpg'

import InformationBlog from "./InformationBlog";


const Information = () => {
    return (
        <WrapperMain>
            <h1 className='title'>Information</h1>
            <WrapperContent>
                <WrapperImages>
                    <img src={informationImg} alt=""/>
                </WrapperImages>
                <WrapperText>
                    <InformationBlog/>
                </WrapperText>
            </WrapperContent>
        </WrapperMain>
    );
};

const WrapperMain = styled('section')`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
  .title {
     font-size: 20px;
     margin-bottom: 30px;
     animation:flash; /* referring directly to the animation's @keyframe declaration */
     animation-duration: 4s;
  }
  
  @media screen and (max-width: 576px){
    width: 95%;
    margin: 0 auto;
  }
`

const WrapperContent = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 3%; 
  @media screen and (max-width: 992px){
    gap: 0;
  }
`

const WrapperImages = styled('div')`
  width: 47%;
   animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 5s; /* don't forget to set a duration! */
  img {
    max-width: 100%;
  }
  
  @media screen and (max-width: 1350px){
    width: 40%;
  }
   @media screen and (max-width: 992px){
    display: none;
  }
  
`

const WrapperText = styled('div')`
  width: 50%;
  animation: backInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 6s; /* don't forget to set a duration! */
  
  @media screen and (max-width: 1350px){
    width: 57%;
  }
  @media screen and (max-width: 992px){
    width: 100%;
  }
  
  @media screen and (max-width: 992px){
    animation:slideInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 4s; /* don't forget to set a duration! */
  }
`

export default Information;