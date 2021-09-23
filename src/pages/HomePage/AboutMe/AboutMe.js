import React from 'react';
import { homeObjFour, homeObjThree, homeObjTwo } from './Data';
import { InfoSection } from '../../../components';

function Home() {
    return (
        <>   
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home;