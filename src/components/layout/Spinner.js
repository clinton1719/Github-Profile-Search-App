import React, {Fragment} from 'react';
import spinner from './Rocket.gif';

const Spinner = () => {

       return (
        <Fragment>
        <img src = {spinner} alt="Loading" style={{width: '100px', margin: 'auto', marginTop: '200px', display: 'block'}}/>
    </Fragment>

       );
}

export default Spinner;