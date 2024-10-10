import React from 'react';
import myImage from './mySchool.jpg';

export default function Img() {
    return(
        <>
            <div className="main">
                <div className="image-container">
                    <img src={myImage} style={{width:"100%",height:"500px"}}/>
                </div>
            </div>
        </>
    );
}