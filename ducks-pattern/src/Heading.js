import React from 'react';
import {headingText} from "./heading";

const Heading = () =>
    <div className='jumbotron'>
        <h1>{headingText.HEADING_HEADER_TEXT}</h1>
        <p className='lead'>{headingText.HEADING_LEAD_TEXT}</p>
    </div>;

export default Heading;