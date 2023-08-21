import React from 'react';

import styled from "@emotion/styled";

import ProjectCard from "../ui/ProjectCard";

import {data_projects} from '../data/db'

const Projects = () => {
    return (
        <WrapperMain>
            <h1 className='title'>Projects</h1>
            <WrapperContent>
                {
                    data_projects?.map(card => (
                        <ProjectCard card={card}/>
                    ))
                }
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
    width: 90%;
  }
`

const WrapperContent = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  animation: fadeInUpBig; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 8s; /* don't forget to set a duration! */
`

export default Projects;