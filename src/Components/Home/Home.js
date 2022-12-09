import React from 'react';
import bgImage from '../../assets/bg.jpeg'

const Home = () => {
    return (
        <div className='hero min-h-screen flex justify-center bg-center bg-no-repeat' style={{
            'backgroundImage': `url(${bgImage})`
        }}>

        </div>
    );
};

export default Home;