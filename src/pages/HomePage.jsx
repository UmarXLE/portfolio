import React from 'react';

import styled from "@emotion/styled";
import Intro from "../components/Intro";
import Information from "../components/Information";
import Projects from "../components/Projects";
import About from "../components/About";


const HomePage = () => {
    return (
        <WrapperMain>
            <Intro/>
            <Information/>
            <Projects/>
            <About/>
        </WrapperMain>
    );
};

const WrapperMain = styled('section')`
`

export default HomePage;