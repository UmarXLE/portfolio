import React from 'react';

import styled from "@emotion/styled";

const InformationBlog = () => {
    return (
        <WrapperMain>
            {/*birth date*/}
            <div className='birthdDate'>
                <h3 className='name'>Umar Kylychbekovich</h3>
            </div>

            <div className='birthdDate'>
                <h3 className='titles'>Birth date :</h3>
                <p className='underTitles'>29.04.2004</p>
            </div>

            {/*education*/}
            <div className='item'>
                <h3 className='titles'> Education </h3>
                <div className='item-content'>
                    <p className='underTitles'>International College of MUKR <br/> (Programmer Technologist)</p>
                    <p className='underTitles'>2020 - 2023</p>
                </div>
                <div className='item-content'>
                    <p className='underTitles'>Academy of Programming ITRUN <br/> (Frontend Developer)</p>
                    <p className='underTitles'>2022</p>
                </div>
            </div>

            {/*exprience*/}
            <div className='item'>
                <h3 className='titles'> Experience </h3>
                <div className='item-content'>
                    <p className='underTitles'>ITRUN Programming Academy <br/>(Mentor support)</p>
                    <p className='underTitles rigth-side'>30.12.2022 - 25.05.2023</p>
                </div>
                <div className='item-content'>
                    <p className='underTitles'>ASOI Development Studio <br/> (Junior Frontend Developer)</p>
                    <p className='underTitles'>03.06.2023 - now</p>
                </div>
            </div>

            {/*skills*/}
            <div className='item '>
                <h3 className='titles'> Technical skills </h3>
                <div className='item-language'>
                    <p className='underTitles'>HTML5 , CSS3 , SCSS , SASS , Styled Components , Adaptive Layout , Javascript , React , Typescript(base) , Redux , Redux-Toolkit , React Query , Rest API , Axios , Material UI , Bootsrap , Chakra UI , Github     </p>
                </div>
            </div>

            {/*language*/}
            <div className='item '>
                <h3 className='titles'> Language </h3>
                <div className='item-language'>
                    <p className='underTitles'>Kyrgyz - native ,</p>
                    <p className='underTitles'>Russion - fluent ,</p>
                    <p className='underTitles'>English - A2</p>
                </div>
            </div>

        {/*    contact*/}
            <div className='item'>
                <h3 className='titles'> Contact </h3>
                <p className='underTitles mb'>Email : <a className='item-link' href="mailto:mlssaitov@gmail.com">mlssaitov@gmail.com</a></p>
                <p className='underTitles mb'>Github : <a className='item-link' target='_blank' href="https://github.com/UmarXLE">UmarXlE</a></p>
                <p className='underTitles mb'>Telegram : <a className='item-link' target='_blank' href="https://t.me/restsska">@restsska</a></p>
            </div>

        </WrapperMain>
    );
};


const WrapperMain = styled('section')`
    
    p {
      color: #aeaeae;
    }
    
    h3 {
      font-weight: 500;
    }

  .birthdDate{
    display: flex;
    align-items: center;
        
    .titles {
      font-weight: 500;
    }
    
    .name {
      font-weight: 500;
      margin-bottom: 15px;
    }
    
    .underTitles {
      margin-left: 5px;
    }
  }
  
  .item {
    margin: 15px 0;
    
    & > h3 {
      margin-bottom: 10px;
    }
    
     .mb {
      margin-bottom: 5px;
    }
    
    .item-link {
      text-decoration: none;
      color: cornflowerblue;
    }
    
    .item-content {
      width: 100%;
      display: flex;
      justify-content:space-between;
      align-items: baseline;
      
      .underTitles {
        margin-bottom: 10px;
      }
    }
    
    .item-language {
      display: flex;
      gap: 4px;
    }
  }
  
  @media screen and  (max-width: 576px) {
    .rigth-side {
      text-align: right;
    }
  }
`

export default InformationBlog;