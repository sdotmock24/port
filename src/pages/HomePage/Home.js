import React from 'react';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import { InfoSection } from '../../components';

function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home;
