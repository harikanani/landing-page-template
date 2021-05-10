import React from 'react';
import home from "../images/home.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with' 
                imgsrc={home} 
                isCompName={true}
                compName="Company Name"
                visit='/services' 
                btnname="Get Started" 
            />
        </>
    )
}

export default Home;