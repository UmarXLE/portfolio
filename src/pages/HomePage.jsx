import React from 'react';

import styled from "@emotion/styled";
import Intro from "../components/Intro";
import Information from "../components/Information";
import Projects from "../components/Projects";
import About from "../components/About";
import Form from "../components/Form";


const HomePage = () => {
    return (
        <WrapperMain>
            <Intro/>
            <Information/>
            <Projects/>
            <About/>
            <Form/>
        </WrapperMain>
    );
};

const WrapperMain = styled('section')`
`

export default HomePage;