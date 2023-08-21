import React from 'react';

import styled from "@emotion/styled";

import {Outlet} from 'react-router-dom'


const MainLayout = () => {
    return (
        <WrapperMain>
            <div className='content'>
                <Outlet/>
            </div>
        </WrapperMain>
    );
};

const WrapperMain = styled('main')`
  width: 100%;
  max-width: 1500px;
  height: 100%;
  background: black;
  
  .content {
    max-width: 1500px;
  }
`



export default MainLayout;