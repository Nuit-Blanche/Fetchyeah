import  React  from  'react';
import './Display.css';

const  Display = ({ simpson }) => {
    return (
        <div  className="Display">
           
            <ul className = "liste">
                
                <li className="text1">Character : {simpson.character}</li>
               <li><img src={simpson.image}  alt="picture"  /></li>
                <li>Quote : {simpson.quote}</li>
                
            </ul>
        </div>
    );
};

export  default  Display;